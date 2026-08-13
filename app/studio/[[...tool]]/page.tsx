'use client'
import dynamic from 'next/dynamic'

const NextStudio = dynamic(() => import('next-sanity/studio').then(m => m.NextStudio), {ssr:false})

export default function StudioPage(){
  const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
  if(!configured){
    return <main style={{fontFamily:'sans-serif',padding:'48px',maxWidth:760,margin:'0 auto'}}>
      <h1>NewLife CMS setup required</h1>
      <p>Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> to <code>.env.local</code> and Vercel Environment Variables, then redeploy.</p>
      <p>See <code>CMS_SETUP.md</code> in the project root for the exact setup steps.</p>
    </main>
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require('../../../sanity.config').default
  return <NextStudio config={config}/>
}
