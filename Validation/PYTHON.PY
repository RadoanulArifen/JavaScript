# Example pipeline using GPT + Search API
import openai
import google_search_api

def answer_question(question: str) -> str:
    # Step 1: Generate search query
    prompt = f"Generate a Google search query for: {question}"
    search_query = openai.Completion.create(prompt=prompt, model="gpt-4").choices[0].text
    
    # Step 2: Retrieve top 3 web snippets
    search_results = google_search_api.fetch(search_query, top_k=3)
    
    # Step 3: Format prompt with context
    context = "\n".join([snippet.text for snippet in search_results])
    qa_prompt = f"Answer based on:\n{context}\n\nQuestion: {question}"
    
    # Step 4: Generate answer
    response = openai.Completion.create(prompt=qa_prompt, model="gpt-4")
    return response.choices[0].text
