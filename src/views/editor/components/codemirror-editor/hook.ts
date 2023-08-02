import useEditorStore from '@/store/modules/editor'
import { Ref, computed, nextTick, onActivated, onDeactivated, ref, watchEffect } from 'vue'
import { linkFlag, selectIcon } from '../toolbar/hook'
import { clickedTarget } from '../../hook'
import { setClickedLinkText, setClickedLinkURL } from '../toolbar/components/linkInput/hook'
import { getPickerFile } from '@/utils/uploader'
import { resumeDOMStruct2Markdown } from '@/utils/dom2md'

export function initEditorState(resumeType: string) {
  const editorStore = useEditorStore()
  editorStore.initMDContent(resumeType)

  const writable = computed(() => editorStore.writable)

  return {
    writable,
    editorStore
  }
}

// 左右移动伸缩布局
export function useMoveLayout() {
  const left = ref(500)
  let flag = false

  function move(event: MouseEvent) {
    if (!flag) return
    left.value = event.clientX - 15
  }

  function down() {
    document.body.classList.add('no-select')
    flag = true
  }

  function up() {
    document.body.classList.remove('no-select')
    flag = false
  }

  onActivated(() => {
    window.addEventListener('mouseup', up)
    window.addEventListener('mousemove', move)
  })

  onDeactivated(() => {
    window.removeEventListener('mouseup', up)
    window.removeEventListener('mousemove', move)
  })
  return { left, down, top }
}

export function injectWritableModeAvatarEvent(
  writable: Ref<boolean>,
  setAvatar: (path: string) => void
) {
  watchEffect(() => {
    if (!writable.value) return
    nextTick(() => {
      const node = document.querySelector('.writable-edit-mode') as HTMLElement
      setTimeout(() => {
        const avatar = node.querySelector('img[alt*="个人头像"]')
        if (avatar) {
          avatar.addEventListener('click', async function () {
            const file = await getPickerFile({
              multiple: false,
              accept: 'image/png, image/jpeg,image/jpg, '
            })
            const reader = new FileReader()
            reader.readAsDataURL(file) // 暂时使用base64方案
            reader.onload = function (event) {
              setAvatar(event.target?.result as string)
            }
          })
        }

        injectWritableModeClickedReplace(node)
      })
    })
  })
}

export function injectWritableModeClickedReplace(parentNode: HTMLElement) {
  parentNode.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement,
      className = target.className,
      tagName = target.tagName.toLocaleLowerCase()
    if (className.includes('iconfont')) {
      selectIcon.value = !selectIcon.value
      clickedTarget.value = target
    } else if (tagName === 'a') {
      linkFlag.value = !linkFlag.value
      setClickedLinkText(target)
      setClickedLinkURL(target)
      clickedTarget.value = target
    }
  })
}

// 使用编辑模式
export function useToggleEditorMode(resumeType: string) {
  const { writable, setMDContent } = useEditorStore(),
    DOMTree = ref<HTMLElement>()

  function ObserverContent() {
    const content = resumeDOMStruct2Markdown({
      node: DOMTree.value as Node,
      latest: true,
      uid: 0,
      whiteSpace: 0,
      parent: <Node>DOMTree.value?.parentElement
    })
    setMDContent(content, resumeType)
  }

  onActivated(() => {
    if (writable) {
      nextTick(() => {
        ;(DOMTree.value as HTMLElement).innerHTML = (<HTMLElement>(
          document.querySelector('.reference-dom')
        )).innerHTML
      })
    }
  })
  return {
    writable,
    DOMTree,
    ObserverContent
  }
}
