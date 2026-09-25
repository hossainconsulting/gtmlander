import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Mesh } from 'three'
function Nexus({ selected, onFallback }: { selected: number; onFallback: () => void }) {
  const group = useRef<Group>(null)
  const core = useRef<Mesh>(null)
  const sample = useRef({ seconds: 0, frames: 0, warmup: 0 })
  const compact = window.innerWidth < 768
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime
    if (group.current) group.current.rotation.y += Math.min(delta, 0.05) * 0.15
    if (core.current) core.current.scale.setScalar(1 + Math.sin(time * 2) * 0.035)
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)
    state.camera.position.z +=
      (7 - progress * 0.8 - state.camera.position.z) * Math.min(delta * 3, 1)
    sample.current.warmup += delta
    if (sample.current.warmup < 3 || delta > 0.5) return
    sample.current.seconds += delta
    sample.current.frames++
    if (sample.current.seconds >= 3) {
      if (sample.current.frames / sample.current.seconds < 25) onFallback()
      sample.current.seconds = 0
      sample.current.frames = 0
    }
  })
  return (
    <group ref={group} rotation={[0.25, 0, 0.1]}>
      <ambientLight intensity={1.3} />
      <pointLight position={[3, 4, 5]} intensity={35} color="#00d9ff" />
      <mesh ref={core}>
        <sphereGeometry args={[1.05, compact ? 20 : 40, compact ? 14 : 28]} />
        <meshStandardMaterial
          color="#072d45"
          emissive="#00b6d6"
          emissiveIntensity={0.35}
          metalness={0.65}
          roughness={0.25}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.012, 6, compact ? 48 : 96]} />
        <meshBasicMaterial color="#22506a" />
      </mesh>
      {[0, 1, 2, 3].map((index) => {
        const angle = (index * Math.PI) / 2
        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 2.15, 0, Math.sin(angle) * 2.15]}
            scale={selected === index ? 1.25 : 1}
          >
            <sphereGeometry args={[0.32, compact ? 12 : 24, 16]} />
            <meshStandardMaterial
              color={selected === index ? '#00d9ff' : '#7955dd'}
              emissive={selected === index ? '#00d9ff' : '#7955dd'}
              emissiveIntensity={0.8}
              roughness={0.3}
            />
          </mesh>
        )
      })}
    </group>
  )
}
export default function NexusScene({
  selected,
  active,
  onFallback,
}: {
  selected: number
  active: boolean
  onFallback: () => void
}) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.6, 7], fov: 45 }}
      gl={{ antialias: false, alpha: true }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', onFallback, { once: true })
      }}
    >
      <Nexus selected={selected} onFallback={onFallback} />
    </Canvas>
  )
}
