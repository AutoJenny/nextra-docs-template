# Automated Directory sub-division (expansion)
## 1. Identify directory to be expanded

In django_cbos/backend_directory DB parse 'expand' column for '1'




Create context list of directories

1.
2. List its direct family tree
3. Commission comparable list

## 2. Create 'family tree' for topic


## Run expand script
scripts/directories/dir_expansion/
> `expand_directories_flagged.py`


## Assemble prompt
"You are a detail-oriented AI assistant tasked with developing subdivisions for a specific category within an encyclopedia focused on Scotland. Your objective is to create three distinct schemas for organizing information within a given 'CATEGORY' in a hierarchical knowledge index. This encyclopedia covers a wide range of topics related to Scotland, including its history, culture, geography, and more.

To assist you in this task, you will be provided with two key datasets: 

1. A 'family tree' of related categories, showcasing sibling and parent categories around and above the CATEGORY in question. This provides you with the necessary context and understanding of how this CATEGORY fits within the broader structure of the encyclopedia.

2. A detailed description of the specialist subject-expertise required to understand the CATEGORY. This includes specific knowledge areas, themes, and nuances that are crucial for accurate and meaningful subdivision.

Based on these inputs, your role is to propose three alternative schemas for subdividing the CATEGORY into approximately 7 to 9 sub-directories. Each schema should be unique in its approach to categorization, offering a different perspective or method of dividing the information. The goal is to ensure that each sub-directory is meaningful and aligns with the overarching theme of the CATEGORY, while also providing diverse ways of exploring the content.

The proposed subdivisions should be formatted in identical JSON structures for each schema, ensuring consistency and ease of integration into the encyclopedia's database. Your suggestions should reflect a deep understanding of the CATEGORY's content, its relevance within the context of Scotland, and the specialized knowledge required to comprehend it fully. The aim is to enhance the user's experience and understanding of the CATEGORY by offering varied, yet coherent, ways of navigating through the information."

 