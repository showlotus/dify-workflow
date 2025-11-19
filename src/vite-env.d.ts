/// <reference types="vite/client" />

/**
 * Vite 环境变量类型定义
 */
interface ImportMetaEnv {
  // API 配置
  readonly VITE_API_PREFIX?: string
  readonly VITE_PUBLIC_API_PREFIX?: string
  readonly VITE_MARKETPLACE_API_PREFIX?: string
  readonly VITE_MARKETPLACE_URL_PREFIX?: string

  // 版本配置
  readonly VITE_EDITION?: string

  // 登录配置
  readonly VITE_SUPPORT_MAIL_LOGIN?: string

  // Cookie 配置
  readonly VITE_COOKIE_DOMAIN?: string

  // 路径配置
  readonly VITE_BASE_PATH?: string

  // 功能开关
  readonly VITE_DISABLE_UPLOAD_IMAGE_AS_ICON?: string
  readonly VITE_GITHUB_ACCESS_TOKEN?: string

  // 节点和工具限制
  readonly VITE_MAX_TOOLS_NUM?: string
  readonly VITE_MAX_PARALLEL_LIMIT?: string
  readonly VITE_TEXT_GENERATION_TIMEOUT_MS?: string
  readonly VITE_LOOP_NODE_MAX_COUNT?: string
  readonly VITE_MAX_ITERATIONS_NUM?: string
  readonly VITE_MAX_TREE_DEPTH?: string

  // 网站爬虫功能开关
  readonly VITE_ALLOW_UNSAFE_DATA_SCHEME?: string
  readonly VITE_ENABLE_WEBSITE_JINAREADER?: string
  readonly VITE_ENABLE_WEBSITE_FIRECRAWL?: string
  readonly VITE_ENABLE_WEBSITE_WATERCRAWL?: string
  readonly VITE_ENABLE_SINGLE_DOLLAR_LATEX?: string

  // Zendesk 配置
  readonly VITE_ZENDESK_WIDGET_KEY?: string
  readonly VITE_ZENDESK_FIELD_ID_ENVIRONMENT?: string
  readonly VITE_ZENDESK_FIELD_ID_VERSION?: string
  readonly VITE_ZENDESK_FIELD_ID_EMAIL?: string
  readonly VITE_ZENDESK_FIELD_ID_WORKSPACE_ID?: string
  readonly VITE_ZENDESK_FIELD_ID_PLAN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

