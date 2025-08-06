import GitLab from '../components/icons/gitlab.vue'

import type { Component } from 'vue'

export const useSocialLinks = () => {
  return [
    {
      link: 'https://gitlab.csc.com.cn/csc-it/ecomm/public-tools/ffdp/ffdp-ui-vue',
      icon: GitLab,
      text: 'GitLab',
    },
  ]
}
