import { groq } from "@ai-sdk/groq"
import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { destination, answers } = await req.json()

    if (!destination || !answers) {
      return new Response("Missing destination or answers", { status: 400 })
    }

    const systemPrompt = `Tu es un expert en voyages temporels de l'agence TimeTravel Agency.
    Ton rôle est d'expliquer brièvement (2-3 phrases maximum) pourquoi une destination historique spécifique correspond parfaitement à la personnalité du voyageur, en te basant sur ses réponses au quiz.
    Adopte un ton élégant, mystérieux et engageant. Ne mentionne pas que tu es une IA.`

    const userPrompt = `
    Destination recommandée : ${destination.name || destination}
    
    Réponses du voyageur :
    ${answers.map((a: any) => `- ${a.question}: ${a.answer}`).join('\n')}
    
    Explique pourquoi cette destination est le choix parfait pour ce voyageur.`

    const { text } = await generateText({
      model: groq("llama-3.3-70b-versatile"),
      system: systemPrompt,
      prompt: userPrompt,
    })

    return Response.json({ recommendation: text })
  } catch (error) {
    console.error("Error generating recommendation:", error)
    return new Response("Error generating recommendation", { status: 500 })
  }
}
