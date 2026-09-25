import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
const NexusScene = lazy(() => import('../three/NexusScene'))
export const stages = ['Lead qualification', 'Needs analysis', 'Proposal building', 'Conversion']
function StaticNexus() {
  return (
    <div className="nexus-static" aria-hidden="true">
      <span>GTM</span>
      {stages.map((stage, i) => (
        <i key={stage} className={`node node-${i}`}>
          {i + 1}
        </i>
      ))}
    </div>
  )
}
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? <StaticNexus /> : this.props.children
  }
}
export default function HeroVisual() {
  const [animated, setAnimated] = useState(false)
  const [selected, setSelected] = useState(0)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('webgl2')
      setAnimated(!preference.matches && Boolean(context))
      context?.getExtension('WEBGL_lose_context')?.loseContext()
    }
    update()
    preference.addEventListener('change', update)
    const element = document.getElementById('nexus-visual')
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (element) observer.observe(element)
    return () => {
      preference.removeEventListener('change', update)
      observer.disconnect()
    }
  }, [])
  return (
    <div
      id="nexus-visual"
      className="nexus-panel"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setSelected(0)
      }}
    >
      <div className="nexus-caption">
        <span>FOUR STAGES. ONE CONNECTED FLOW.</span>
        <button type="button" onClick={() => setAnimated(false)}>
          Static view
        </button>
      </div>
      <div className="nexus-canvas" aria-hidden="true">
        {animated ? (
          <SceneBoundary>
            <Suspense fallback={<StaticNexus />}>
              <NexusScene
                selected={selected}
                active={visible}
                onFallback={() => setAnimated(false)}
              />
            </Suspense>
          </SceneBoundary>
        ) : (
          <StaticNexus />
        )}
      </div>
      <div className="nexus-stages" aria-label="Explore workflow stages">
        {stages.map((stage, index) => (
          <button
            type="button"
            key={stage}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
            {stage}
          </button>
        ))}
      </div>
      <p className="nexus-description" aria-live="polite">
        {
          [
            'Capture a new inquiry and identify the right service.',
            'Gather the details your team needs to assess the job.',
            'Prepare a proposal for your team to review.',
            'Guide an approved opportunity toward a booking.',
          ][selected]
        }
      </p>
    </div>
  )
}
