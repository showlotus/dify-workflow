'use client'
import i18n from 'i18next'
import { camelCase } from 'lodash-es'
import { initReactI18next } from 'react-i18next'

// 静态导入所有 zh-Hans 翻译资源
import appAnnotation from '../i18n/zh-Hans/app-annotation'
import appApi from '../i18n/zh-Hans/app-api'
import appDebug from '../i18n/zh-Hans/app-debug'
import appLog from '../i18n/zh-Hans/app-log'
import appOverview from '../i18n/zh-Hans/app-overview'
import app from '../i18n/zh-Hans/app'
import billing from '../i18n/zh-Hans/billing'
import common from '../i18n/zh-Hans/common'
import custom from '../i18n/zh-Hans/custom'
import datasetCreation from '../i18n/zh-Hans/dataset-creation'
import datasetDocuments from '../i18n/zh-Hans/dataset-documents'
import datasetHitTesting from '../i18n/zh-Hans/dataset-hit-testing'
import datasetPipeline from '../i18n/zh-Hans/dataset-pipeline'
import datasetSettings from '../i18n/zh-Hans/dataset-settings'
import dataset from '../i18n/zh-Hans/dataset'
import education from '../i18n/zh-Hans/education'
import explore from '../i18n/zh-Hans/explore'
import layout from '../i18n/zh-Hans/layout'
import login from '../i18n/zh-Hans/login'
import oauth from '../i18n/zh-Hans/oauth'
import pipeline from '../i18n/zh-Hans/pipeline'
import pluginTags from '../i18n/zh-Hans/plugin-tags'
import pluginTrigger from '../i18n/zh-Hans/plugin-trigger'
import plugin from '../i18n/zh-Hans/plugin'
import register from '../i18n/zh-Hans/register'
import runLog from '../i18n/zh-Hans/run-log'
import share from '../i18n/zh-Hans/share'
import time from '../i18n/zh-Hans/time'
import tools from '../i18n/zh-Hans/tools'
import workflow from '../i18n/zh-Hans/workflow'

const requireSilent = async (lang: string, namespace: string) => {
  let res
  try {
    res = (await import(`../i18n/${lang}/${namespace}`)).default
  }
  catch {
    res = (await import(`../i18n/zh-Hans/${namespace}`)).default
  }

  return res
}

const NAMESPACES = [
  'app-annotation',
  'app-api',
  'app-debug',
  'app-log',
  'app-overview',
  'app',
  'billing',
  'common',
  'custom',
  'dataset-creation',
  'dataset-documents',
  'dataset-hit-testing',
  'dataset-pipeline',
  'dataset-settings',
  'dataset',
  'education',
  'explore',
  'layout',
  'login',
  'oauth',
  'pipeline',
  'plugin-tags',
  'plugin-trigger',
  'plugin',
  'register',
  'run-log',
  'share',
  'time',
  'tools',
  'workflow',
]

export const loadLangResources = async (lang: string) => {
  const modules = await Promise.all(
    NAMESPACES.map(ns => requireSilent(lang, ns)),
  )
  const resources = modules.reduce((acc, mod, index) => {
    acc[camelCase(NAMESPACES[index])] = mod
    return acc
  }, {} as Record<string, any>)
  return resources
}

// Load zh-Hans resources first to make sure fallback works
// 使用静态导入的翻译资源
const getInitialTranslations = () => {
  const en_USResources = {
    appAnnotation,
    appApi,
    appDebug,
    appLog,
    appOverview,
    app,
    billing,
    common,
    custom,
    datasetCreation,
    datasetDocuments,
    datasetHitTesting,
    datasetPipeline,
    datasetSettings,
    dataset,
    education,
    explore,
    layout,
    login,
    oauth,
    pipeline,
    pluginTags,
    pluginTrigger,
    plugin,
    register,
    runLog,
    share,
    time,
    tools,
    workflow,
  }
  return {
    'zh-Hans': {
      translation: en_USResources,
    },
  }
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: undefined,
    fallbackLng: 'zh-Hans',
    resources: getInitialTranslations(),
  })
}

export const changeLanguage = async (lng?: string) => {
  if (!lng) return
  if (!i18n.hasResourceBundle(lng, 'translation')) {
    const resource = await loadLangResources(lng)
    i18n.addResourceBundle(lng, 'translation', resource, true, true)
  }
  await i18n.changeLanguage(lng)
}

export default i18n
