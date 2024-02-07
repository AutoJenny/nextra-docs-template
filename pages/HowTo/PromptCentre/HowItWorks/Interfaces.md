# Prompt Centre interfaces

Coding for the Prompt Centre interfaces is all contained in a Django sub-project at:

    /var/www/next/cbos/django_project/modular_scripts_app

## Interfaces Overview

Our system has five main interfaces. Here's a simple breakdown of each part:

1. **Datasets Interface**:
   - URL: [Datasets](http://34.244.159.150:8000/api/datasets/)
   - Purpose: Manage and view datasets. Datasets are collections of data that your templates will use.
   - How to Use: Add new datasets or edit existing ones. Each dataset should correspond to the type of data your template will process.

2. **Templates Interface**:
   - URL: [Templates](http://34.244.159.150:8000/api/templates/)
   - Purpose: Create and modify templates. Templates are the blueprints for your output. They define the structure and placeholders for data.
   - How to Use: Create a new template or edit an existing one. Insert placeholders where you want dataset information to appear.

3. **Scripts Interface**:
   - URL: [Scripts](http://34.244.159.150:8000/api/scripts/)
   - Purpose: View the list of scripts. Scripts are processed outputs combining your templates with datasets.
   - How to Use: Review the scripts generated from your templates and datasets.

4. **New Data Placeholders (Admin Panel)**:
   - URL: [Admin Panel](http://34.244.159.150:8000/admin/)
   - Purpose: Advanced management of datasets, templates, and scripts.
   - How to Use: Use this for more complex management tasks or when you need more control than the other interfaces provide.

5. **Test Template Interface**:
   - URL: [Test Template](http://34.244.159.150:8000/modular-scripts/test/)
   - Purpose: Test your templates with selected datasets.
   - How to Use: Select a template and a dataset, then see how they combine to create an output. Great for testing and previewing results.