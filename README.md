# Jaris Landing Page

## Contributing to the Jaris Landing Page Project

1. **Fork the Repository**
   - Go to [Jaris Landing Page on GitHub](https://github.com/Advanced-Robotics-Systems/jaris-landing) and click the "Fork" button at the top right of the page.

2. **Clone Your Fork**
   - Clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/<your-username>/jaris-landing.git
     ```

3. **Set Upstream Remote**
   - Navigate to the project directory:
     ```bash
     cd jaris-landing
     ```
   - Add the original repository as an upstream remote to keep your fork up to date:
     ```bash
     git remote add upstream https://github.com/Advanced-Robotics-Systems/jaris-landing.git
     ```

4. **Pull Updates from Upstream**
   - Fetch the latest changes from the main repository:
     ```bash
     git fetch upstream
     ```
   - Merge the changes from the upstream `main` branch into your local branch:
     ```bash
     git merge upstream/main
     ```

5. **Create a Pull Request**
   - Push your changes to your forked repository:
     ```bash
     git push origin <your-branch>
     ```
   - Go to the GitHub repository and open a pull request from your fork's branch to the `main` branch of the original repository.

---

## Conventions and Practices

- **Folder Structure**
  - **`sections/`**: Contains the main sections of the landing page.
  - **`components/`**: Houses reusable components for the landing page.
  - **`index.js`**: Each folder contains an `index.js` file for exporting sections or components.

- **Editing Files**
  - Modify only the files in the `sections` or `components` folders.
  - Follow the naming conventions and structure that are already in place.

- **Code Standards**
  - Maintain the project's existing coding style.
  - Ensure your commit messages are clear and specific.
  - Test all your changes locally before submitting a pull request to ensure the functionality is intact.

## Additional Notes

- **Dependencies**: Make sure all necessary dependencies are installed before you begin working. Use:
  ```bash
  npm install
