
# Expand a CBOS Directory manually

This page gives instructions on how to expand any existing 'leaf' directory into a set of appropriate sub-directories

## OVERVIEW
This will become a fully automated process. It's not yet. But it's important to use the following steps to ensure that your data is formatted correctly.

Soon it should be possible to create a flag on a directory and have it automatically expand into the appropriate sub-directories.

Until then, the process is as follows:


## Step 1: Add Data
This defines the database elements that will be inserted iteratively into a prompt (or other) template to create the final output.

For example, to expand a directory in the CBOS, you would add the following data:
- 

- **Action**: Go to the [Datasets](http://34.244.159.150:8000/api/datasets/) Interface.
- **Purpose**: To add or edit the data you will use in your templates.
- **How**:
  1. Visit the Datasets Interface URL.
  2. Click "Add New Dataset" and enter your data.

## Step 2: Create Template

- **Action**: Navigate to the [Templates](http://34.244.159.150:8000/api/templates/) Interface.
- **Purpose**: To create a blueprint for how your data should be formatted.
- **How**:
  1. Go to the Templates Interface URL.
  2. Select "Create New Template".
  3. Insert `<placeholder_name>` where you want dataset information to appear.

## Step 3: Test Your Template

- **Action**: Use the [Test Template](http://34.244.159.150:8000/modular-scripts/test/) Interface.
- **Purpose**: To see how your template looks with your data.
- **How**:
  1. Access the Test Template Interface URL.
  2. Choose your template and dataset.
  3. Click "Submit" to view the output.

## Step 4: Review and Edit

- **Action**: Edit your dataset or template if needed.
- **Purpose**: To make adjustments based on the test results.
- **How**:
  - Use the Templates Interface or Datasets Interface to make changes.
  - For complex edits, use the Admin Panel.

