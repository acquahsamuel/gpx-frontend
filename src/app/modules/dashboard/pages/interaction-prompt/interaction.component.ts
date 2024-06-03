import { Component, OnInit, ViewEncapsulation } from "@angular/core";

let PROMPT = [
  {
    prompt: "Prompt Engineer",
    response: `
    Prompt engineering is a crucial concept in the field of artificial intelligence (AI) and natural language processing (NLP), particularly when working with large language models like GPT (Generative Pre-trained Transformer) developed by OpenAI. It involves crafting and optimizing prompts (input queries) to elicit desired responses from an AI model. Here's a more detailed explanation`,
  },
  {
    prompt: "Parsed html rendered",
    response: `<div class="markdown prose w-full break-words dark:prose-invert dark"><p>Prompt engineering is a crucial concept in the field of artificial intelligence (AI) and natural language processing (NLP), particularly when working with large language models like GPT (Generative Pre-trained Transformer) developed by OpenAI. It involves crafting and optimizing prompts (input queries) to elicit desired responses from an AI model. Here's a more detailed explanation:</p><h3>What is Prompt Engineering?</h3><ol><li><p><strong>Definition:</strong></p><ul><li>Prompt engineering is the process of designing, refining, and structuring input prompts to guide the behavior and output of AI models, such as GPT-3 or GPT-4. The goal is to achieve specific, high-quality responses that meet the user's requirements.</li></ul></li><li><p><strong>Importance:</strong></p><ul><li>Effective prompt engineering can significantly enhance the performance and usefulness of AI models. Well-crafted prompts can lead to more accurate, relevant, and contextually appropriate responses, while poorly designed prompts might result in vague, irrelevant, or incorrect outputs.</li></ul></li><li><p><strong>Applications:</strong></p><ul><li><strong>Chatbots and Virtual Assistants:</strong> Improving user interactions by generating more accurate and helpful responses.</li><li><strong>Content Creation:</strong> Assisting in generating articles, stories, or other written content.</li><li><strong>Data Analysis:</strong> Helping in generating summaries or explanations of complex data.</li><li><strong>Educational Tools:</strong> Providing detailed explanations or tutoring on specific topics.</li><li><strong>Software Development:</strong> Assisting in code generation, debugging, and documentation.</li></ul></li></ol><h3>Key Concepts in Prompt Engineering:</h3><ol><li><p><strong>Prompt Structure:</strong></p><ul><li><strong>Simple Prompts:</strong> Direct and straightforward inputs, such as "Explain the theory of relativity."</li><li><strong>Complex Prompts:</strong> Detailed inputs with specific instructions, such as "Summarize the main points of the theory of relativity and explain its impact on modern physics in less than 200 words."</li></ul></li><li><p><strong>Prompt Types:</strong></p><ul><li><strong>Instruction-Based Prompts:</strong> Explicitly instructing the model on what to do, e.g., "Write a poem about autumn."</li><li><strong>Contextual Prompts:</strong> Providing context or background information, e.g., "Given that Alice is a software engineer, write a cover letter for a job application."</li><li><strong>Few-Shot Prompts:</strong> Providing examples to guide the model, e.g., "Translate the following sentences from English to French. 'Hello' - 'Bonjour'. 'Goodbye' - 'Au revoir'."</li></ul></li><li><p><strong>Refinement Techniques:</strong></p><ul><li><strong>Iteration:</strong> Continuously refining prompts based on the outputs received, adjusting the wording, structure, or additional context.</li><li><strong>Feedback Incorporation:</strong> Using feedback from users or domain experts to improve prompt quality.</li><li><strong>Evaluation:</strong> Assessing the quality of responses to determine the effectiveness of prompts and making necessary adjustments.</li></ul></li><li><p><strong>Challenges:</strong></p><ul><li><strong>Ambiguity:</strong> Ensuring prompts are clear and unambiguous to avoid misunderstandings.</li><li><strong>Bias:</strong> Avoiding biases in prompts that could lead to biased outputs.</li><li><strong>Complexity:</strong> Balancing the complexity of prompts to achieve detailed responses without overwhelming the model.</li></ul></li></ol><h3>Example of Prompt Engineering:</h3><p><strong>Simple Prompt:</strong></p><ul><li>"What is the capital of France?"<ul><li>Response: "The capital of France is Paris."</li></ul></li></ul><p><strong>Complex Prompt:</strong></p><ul><li>"Describe the cultural and historical significance of Paris, the capital of France, in less than 150 words."<ul><li>Response: "Paris, the capital of France, is renowned for its rich cultural and historical heritage. Known as 'The City of Light,' Paris is home to iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. The city has been a center of art, philosophy, and science since the Age of Enlightenment. Parisian culture is celebrated for its cuisine, fashion, and literature, with numerous cafes, galleries, and theaters that have inspired artists and intellectuals for centuries. Today, Paris continues to be a global hub of art, culture, and history."</li></ul></li></ul><h3>Conclusion:</h3><p>Prompt engineering is a vital skill in leveraging AI models to their fullest potential. By mastering the art of crafting effective prompts, users can significantly enhance the quality and relevance of the outputs generated by AI systems, making them more useful across various applications and industries.</p></div>`,
  },
  {
    prompt: "Start Lorem ipsum dolor sit amet consectetur   adipisicing elit. Distinctio di  End",
    response: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi vero excepturi molestiae quod, cum eligendi, blanditiis nobis sit ratione facilis perspiciatis totam ipsum consectetur earum, harum aliquid quibusdam sapiente omnis velit deleniti iure? Optio magnam temporibus ex earum libero hic nobis odio provident assumenda sunt, quod impedit nulla, harum ratione placeat explicabo delectus porro doloribus? Quos ratione voluptatibus libero soluta veritatis maiores facere repudiandae, aliquam possimus beatae consequuntur. Sit numquam ut iste similique nisi deleniti. Consectetur beatae voluptatem voluptatum fugiat sapiente esse iure porro aliquam, iusto nemo facilis ut iste in numquam amet natus? A consequatur totam itaque nam ea modi laudantium, eum cum beatae aspernatur laboriosam ab ipsum libero vel recusandae, quaerat quo tempore magni alias? Eveniet rerum laboriosam voluptates aliquid. Labore pariatur ullam dicta commodi placeat nobis consequatur vero reprehenderit quos, sunt iusto expedita illo totam perferendis delectus est ipsam esse itaque provident? Veritatis rerum aperiam suscipit ad animi delectus illum accusantium reiciendis adipisci nobis at, autem, error neque quasi, nostrum nesciunt voluptas labore provident quas placeat ipsam? Dolore unde, ex suscipit fugit consequuntur saepe, sapiente necessitatibus debitis voluptatem praesentium repudiandae, beatae esse eveniet! Voluptas velit numquam laboriosam optio provident sunt, sequi, consectetur officiis et quia nemo atque?",
  },
  {
    prompt: "Render table and html",
    response: `<table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>`,
  },
  {
    prompt: "Render html let see",
    response: `<p style="color: white;font-family: cursive;font-size: 50px;text-align: center;">This is a website template, comment please :) </p>
    <p style="color: white;font-family: edwardian script itc;font-size: 50px;text-align: left;"> Made by : Mia Woods</p>`,
  },
];

@Component({
  selector: "app-test-demo",
  templateUrl: "./interaction.component.html",
  styleUrls: ["./interaction.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class InteractionComponent implements OnInit {
  opened: Boolean = true;
  MESSAGE_ENGAGEMENT = PROMPT;

  // renderDescription(template: any) {
  //   // template.innerHTML = PROMPT[0].response;
  //   template.innerHTML = PROMPT[0].response?.toString();
  //   // template.innerHTML = this.MESSAGE_ENGAGEMENT.jobDescription.toString();
  // }

  renderDescription(response: string): string {
    return response;
  }
  constructor() {}

  ngOnInit(): void {}

  sendMessage() {}
}
