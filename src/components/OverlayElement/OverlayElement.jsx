import styles from "./OverlayElement.module.scss";

const OverlayElement = () => {
  return (
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="/" target="_blank" rel="noopener noreferrer" aria-label="join facebook">
               <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
          >
            <path d="M34.453 17.875C34.453 8.51 26.865.922 17.5.922 8.135.922.547 8.51.547 17.875c0 8.477 6.152 15.518 14.287 16.748V22.797h-4.307v-4.922h4.307v-3.691c0-4.239 2.53-6.631 6.357-6.631 1.915 0 3.829.342 3.829.342v4.17H22.9c-2.119 0-2.802 1.298-2.802 2.665v3.145h4.716l-.752 4.922h-3.964v11.826c8.134-1.23 14.355-8.271 14.355-16.748Z" />
          </svg>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/" target="_blank" rel="noopener noreferrer" aria-label="join twitter">
               <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="31"
          >
            <path d="M31.377 7.766c1.367-1.026 2.598-2.256 3.555-3.692-1.23.547-2.666.957-4.102 1.094 1.504-.889 2.598-2.256 3.145-3.965a15.16 15.16 0 0 1-4.512 1.777A7.178 7.178 0 0 0 24.199.725a7.177 7.177 0 0 0-7.178 7.177c0 .547.069 1.094.206 1.641a20.825 20.825 0 0 1-14.834-7.52c-.616 1.026-.957 2.256-.957 3.623 0 2.461 1.23 4.649 3.212 5.948-1.162-.069-2.324-.342-3.28-.889v.068c0 3.487 2.46 6.358 5.741 7.041-.546.137-1.23.274-1.845.274-.479 0-.889-.069-1.368-.137.89 2.871 3.555 4.922 6.7 4.99-2.461 1.915-5.537 3.077-8.887 3.077-.615 0-1.162-.069-1.709-.137 3.145 2.05 6.904 3.213 11.006 3.213 13.193 0 20.371-10.87 20.371-20.371v-.957Z" />
          </svg>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="/" target="_blank" rel="noopener noreferrer" aria-label="join youtube">
             <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="30"
          >
            <path d="M36.842 4.92c-.41-1.64-1.71-2.94-3.282-3.35C30.621.75 19 .75 19 .75s-11.69 0-14.629.82C2.8 1.98 1.5 3.28 1.09 4.92.27 7.79.27 13.943.27 13.943s0 6.084.82 9.024c.41 1.64 1.709 2.87 3.281 3.281C7.311 27 19 27 19 27s11.621 0 14.56-.752c1.573-.41 2.872-1.64 3.282-3.281.82-2.94.82-9.024.82-9.024s0-6.152-.82-9.023Zm-21.67 14.56V8.406l9.707 5.537-9.707 5.537Z" />
          </svg>  
          </a>      
        </li>
        <li className={styles.listItem}>
        <a href="/" target='_blank' rel="noopener noreferrer" aria-label="join linkedin">
               <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
          >
            <path d="M7.023 31V10.56H.666V31h6.357ZM3.811 7.826c2.05 0 3.691-1.709 3.691-3.76 0-1.982-1.64-3.623-3.691-3.623C1.828.443.188 2.084.188 4.066c0 2.051 1.64 3.76 3.623 3.76ZM30.744 31h.069V19.79c0-5.47-1.231-9.708-7.657-9.708-3.076 0-5.127 1.709-6.015 3.281h-.069V10.56h-6.084V31h6.358V20.883c0-2.666.478-5.195 3.76-5.195 3.28 0 3.35 3.007 3.35 5.4V31h6.288Z" />
          </svg> 
          </a>
        </li>
      </ul>
  );
};

export default OverlayElement;
