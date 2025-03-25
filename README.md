# Care Frontend

**Care Frontend** is the React-based user interface for the Care web application, which helps users break down big goals into smaller, manageable sub-tasks with a journaling system. This repository contains the frontend source code, which is built and integrated into the `care` backend repository for deployment.

## Features
- **Interactive UI**: A responsive interface for creating and managing goal trees and journals.
- **Goal Visualization**: Displays tasks in a hierarchical structure.
- **Journaling**: Allows users to add and edit notes for each task.

## Tech Stack
- **Frontend**: React (JavaScript) - Dynamic and responsive user interface.
- **Build Tools**: npm

## Project Status
- **Current State**: The frontend is functional and integrated into the `care` repository via build files.
- **Future Plans**: In the foreseeable future, development will focus on enhancing the UI/UX and adding new features to complement the backend tree logic.

## Prerequisites
- Node.js 18+ and npm

## Installation
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/Shangmin-Chen/care-frontend.git
   cd care-frontend
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run Locally**  
   - Start the development server:  
     ```bash
     npm start
     ```
   - The app will be available at `http://localhost:3000`. Note: It requires the `care` backend running at `http://localhost:8080` to function fully.

4. **Build for Deployment**  
   - Generate production build files:  
     ```bash
     npm run build
     ```
   - Copy the build files to the `care` backend repository (assuming both repos are in the same parent directory):  
     ```bash
     cp -r build/* ../care/src/main/resources/static/
     ```
   - This command recursively copies all files from the `build/` directory to `care/src/main/resources/static/`.

## Usage
- Run locally with `npm start` to develop and test the frontend.
- After building, deploy updates by copying the `build/` files to the `care` backend using the command above.

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License
[Specify your license, e.g., MIT License - see [LICENSE](LICENSE) for details]

## Contact
For questions or feedback, reach out to shangminch@gmail.com.
```

---

### Notes
- The command `cp -r build/* ../care/src/main/resources/static/` assumes:
  - You’re in the `care-frontend` directory when running it.
  - `care` is a sibling directory (e.g., `../care`).
  - The target directory `src/main/resources/static/` exists in the `care` repo.
- If your directory structure is different (e.g., absolute paths or nested locations), replace the relative path with the correct one, like:  
  ```bash
  cp -r build/* /path/to/care/src/main/resources/static/
  ```
- Let me know if you need further adjustments! The `care` README remains unchanged since it didn’t require this specific addition.