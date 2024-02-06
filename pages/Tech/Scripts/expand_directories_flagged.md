In scripts/directories/dir_expansion/

# Script Purpose:
# This script connects to a MySQL database, checks for entries in the 'backend_directory' table
# where the 'expand' column is '1'. For each such entry, it generates a structured output
# based on the data, saves this output as a JSON file, and then updates the 'expand' column to '0'.
