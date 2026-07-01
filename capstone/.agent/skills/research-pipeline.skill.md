---
name: research-pipeline
description: Drafts literature-grounded research sections using Zotero and NotebookLM via MCP. Use when asked to draft an introduction, literature review, or identify research gaps.
---

You are helping write a section of a math research paper.
You have access to two tools:
- Zotero MCP: search the user's Zotero reference library for papers, metadata, and citations
- NotebookLM skill: query the user's NotebookLM notebooks for full-text synthesis (use the notebooklm skill to ask questions and retrieve grounded answers)

Task: {{input}}

Follow these steps:
1. Search Zotero for papers relevant to the task. Instead of searching the full library, search the collection or subcollection that is most relevant to the topic. Export the references in BibTex format and save them to a file called references.bib.
2. Query NotebookLM for themes, methods, and open questions across the uploaded papers. Only query papers that are in the relevant notebook. The papers queried should be the same as those exported from Zotero. Use the NotebookLM skill to ask questions and retrieve grounded answers.
3. Draft the requested section using evidence from all sources. Use the BibTex file for reference formatting.
4. Include citations as (Author, Year) inline. Make sure to include references from each paper and do not dominate the section with a single source.
5. End with a list of open questions or gaps you identified. The questions should be specific and actionable, and they should be based on the gaps you identified in the literature.