# Getting Started with Modular Scripting System

Welcome to the Modular Scripting System! This guide is designed to help you understand and use the system effectively. Here's a simple breakdown of each part:

## Interfaces Overview

Our system has five main interfaces:

1. **Datasets Interface**:
   - URL: [Datasets](http://34.244.159.150:8000/api/templates/datasets/)
   - Purpose: Manage and view datasets. Datasets are collections of data that your templates will use.
   - How to Use: Add new datasets or edit existing ones. Each dataset should correspond to the type of data your template will process.

2. **Templates Interface**:
   - URL: [Templates](http://34.244.159.150:8000/api/templates/templates/)
   - Purpose: Create and modify templates. Templates are the blueprints for your output. They define the structure and placeholders for data.
   - How to Use: Create a new template or edit an existing one. Insert placeholders where you want dataset information to appear.

3. **Scripts Interface**:
   - URL: [Scripts](http://34.244.159.150:8000/api/templates/scripts/)
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

## Creating Your First Output Template

To create an output template and see the results, follow these steps:

1. **Create a DataSet**:
   - Go to the [Datasets Interface](http://34.244.159.150:8000/api/templates/datasets/).
   - Add a new dataset with the data you want to include in your template.

2. **Design a Template**:
   - Navigate to the [Templates Interface](http://34.244.159.150:8000/api/templates/templates/).
   - Create a new template. Insert placeholders in the format `<placeholder_name>` where you want data from your dataset to appear.

3. **Test Your Template**:
   - Visit the [Test Template Interface](http://34.244.159.150:8000/modular-scripts/test/).
   - Select the template and dataset you created.
   - Submit and view the processed output.

4. **Review and Edit as Needed**:
   - If the output isn't what you expected, go back and edit your dataset or template.
   - Use the Admin Panel for more detailed edits or to troubleshoot.

Congratulations! You've now learned how to create and test output templates with your data. Explore the interfaces and experiment with different datasets and templates to see what you can create!
