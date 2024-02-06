In scripts/directories/sql_updates/

# Script Purpose:
# This script updates the 'level' column in the 'backend_directory' table of your database.
# Each row gets a 'level' based on its position in the hierarchy.
# If a row has no parent (parent_id is null), its level is 1.
# If it has a parent, its level is the parent's level + 1.