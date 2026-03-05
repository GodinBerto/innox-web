import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
      projectId: 'sj8cnv1f',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
    appId: process.env.SANITY_STUDIO_APP_ID,
  },
})
