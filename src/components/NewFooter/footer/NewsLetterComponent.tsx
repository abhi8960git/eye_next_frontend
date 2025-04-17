import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="font-bold uppercase">Newsletter</h3>
      <div className="flex w-full">
        <input
          type="email"
          placeholder="Your Email"
          className="bg-transparent text-white px-4 py-3 text-sm flex-grow border border-white"
        />
        <button className="border border-white border-l-0 px-4 py-3 bg-orange-500 hover:bg-orange-600 transition-colors">
          <ArrowRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  )
}
