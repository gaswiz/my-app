import { motion } from "framer-motion";
import "./ProjectFilesWidget.css"; // External styles

export default function ProjectFilesWidget() {
  const projectFiles = [
    { name: "restaurant-finder/", isFolder: true },
    { name: "│── public/", isFolder: true },
    { name: "│   ├── index.html", isFolder: false },
    { name: "│── src/", isFolder: true },
    { name: "│   ├── components/", isFolder: true },
    { name: "│   │   ├── SearchComponent.jsx", isFolder: false },
    { name: "│   │   ├── RestaurantList.jsx", isFolder: false },
    { name: "│   │   ├── RestaurantData.js", isFolder: false },
    { name: "│   ├── pages/", isFolder: true },
    { name: "│   ├── App.js", isFolder: false },
    { name: "│   ├── index.js", isFolder: false },
    { name: "│── package.json", isFolder: false },
    { name: "│── README.md", isFolder: false },
  ];

  return (
    <motion.div
      className="project-files-widget"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="widget-title">📂 Project Files</h3>
      <div className="code-block">
        {projectFiles.map((file, index) => (
          <p key={index} className={file.isFolder ? "folder" : "file"}>
            {file.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
