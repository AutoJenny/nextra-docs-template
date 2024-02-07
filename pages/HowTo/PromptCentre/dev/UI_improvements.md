# PromptBuilder Interface Development Plan

## UI Design Concept

### Introduction Step
- **Text Input**: For naming the process.
- **Textarea**: For describing the process.

### Data Selection Step
- **Drill-Down Selectors**: Cascading dropdowns for database/table/column selection.
- **Short-name and Description Fields**: Inputs for naming and describing data selections.

### Prompt Modification/Creation Step
- **Template Selection**: Dropdown to choose an existing prompt or create a new one.
- **Drag-and-Drop Interface**: For arranging short-names in the prompt area, supporting text editing.

### Preview and Iteration Step
- **Preview Area**: Displays script based on current inputs.
- **Iteration Controls**: For stepping through input table rows.

### Optional Data Instance Input Step
- **Text/Input Field**: For specifying a data instance (e.g., category or article).

### Function Management
- **List of Existing Functions**: With filtering and selection revealing descriptions and edit/activate options.
- **Help Text and Documentation Links**: Area to edit help text or link to documentation.

### Save/Delete Controls
- **Action Buttons**: For saving new/edited scripts or deleting them.

## React Component Structure Suggestion

- **`PromptBuilder`**: Main container component.
  - **`ProcessIntroduction`**
  - **`DataSelector`**
    - **`CascadingDropdown`**
  - **`PromptEditor`**
    - **`DragDropContext`**
  - **`PreviewArea`**
  - **`DataInstanceInput`** (Optional)
  - **`FunctionList`**
  - **`HelpTextEditor`**
  - **`ActionButtons`**

## Implementation Steps

1. **Layout and Styling**: Utilize Bootstrap for responsive layout and styling.
2. **State Management**: Leverage React state and context for data flow across components.
3. **API Integration**: Connect components to Django backend for data operations.
4. **Interactive Elements**: Implement drag-and-drop in the prompt editor and dynamic updates in the preview area.
5. **Function List and Management**: Enable CRUD operations for script functions.
