import PDF from '../assets/JoshDayResume.pdf'

export default function Resume() {
  return (
    <embed className="w-full"
      src={PDF}
      type="application/pdf"
      height={800}
      width={500}
    />
  )
}
