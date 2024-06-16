-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 16, 2024 at 03:50 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coda_projet_final_cv`
--

-- --------------------------------------------------------

--
-- Table structure for table `cat_cv`
--

CREATE TABLE `cat_cv` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `creation_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `models_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cat_cv`
--

INSERT INTO `cat_cv` (`id`, `name`, `creation_at`, `models_id`, `users_id`) VALUES
(49, 'CV_Projectil_Sogepress', '2024-06-16 17:45:00', 1, 45);

-- --------------------------------------------------------

--
-- Table structure for table `cvs`
--

CREATE TABLE `cvs` (
  `id` bigint(20) NOT NULL,
  `name` varchar(64) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` json DEFAULT NULL,
  `models_id` int(11) NOT NULL,
  `cat_cv_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cvs`
--

INSERT INTO `cvs` (`id`, `name`, `creation_date`, `data`, `models_id`, `cat_cv_id`) VALUES
(75, 'CV_Projectil_Sogepress', '2024-06-16 17:45:00', '{\"left\": [{\"type\": \"informations\", \"details\": [{\"label\": \"Téléphone\", \"values\": [\"+33 X XX XX XX XX\"]}, {\"label\": \"Mail\", \"values\": [\"*************@mail.com\"]}, {\"label\": \"Adresse\", \"values\": [\"45 **0 Ville\"]}, {\"label\": \"Autres\", \"values\": [\"Permis B, véhiculé\", \"Age: XX ans (DD/MM/YYYY)\"]}]}, {\"type\": \"Qualités\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Compétences\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Centres d\'intérêt\", \"details\": [{\"label\": \"\", \"values\": [\"Tennis (Pratique depuis 15 ans)\"]}, {\"label\": \"Associatif\", \"values\": [\"Responsable Com (BDE)\", \"Ambassadeur de l\'école (CODA_)\", \"Cours de tennis dans le club ASPTT\"]}]}, {\"type\": \"Langues\", \"details\": [{\"label\": \"\", \"values\": [\"Français (Langue maternelle)\"]}, {\"label\": \"\", \"values\": [\"Espagnol (C1 Instituto Cervantes)\"]}, {\"label\": \"\", \"values\": [\"Anglais (B1 - B2)\"]}]}], \"datas\": {\"lookFor\": \"Bonjour Projectil-Sogrepress\", \"picture\": \"\", \"lastName\": \"DE TEBA JERONIMO\", \"firstName\": \"Pablo\", \"mainColor\": \"#653f7d\"}}', 1, 49),
(76, 'V2_Projectil_Sogepress', '2024-06-16 17:46:11', '{\"left\": [{\"type\": \"informations\", \"details\": [{\"label\": \"Téléphone\", \"values\": [\"+33 X XX XX XX XX\"]}, {\"label\": \"Mail\", \"values\": [\"*************@mail.com\"]}, {\"label\": \"Adresse\", \"values\": [\"45 **0 Ville\"]}, {\"label\": \"Autres\", \"values\": [\"Permis B, véhiculé\", \"Age: XX ans (DD/MM/YYYY)\"]}]}, {\"type\": \"Qualités\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Compétences\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Centres d\'intérêt\", \"details\": [{\"label\": \"\", \"values\": [\"Tennis (Pratique depuis 15 ans)\"]}, {\"label\": \"Associatif\", \"values\": [\"Responsable Com (BDE)\", \"Ambassadeur de l\'école (CODA_)\", \"Cours de tennis dans le club ASPTT\"]}]}, {\"type\": \"Langues\", \"details\": [{\"label\": \"\", \"values\": [\"Français (Langue maternelle)\"]}, {\"label\": \"\", \"values\": [\"Espagnol (C1 Instituto Cervantes)\"]}, {\"label\": \"\", \"values\": [\"Anglais (B1 - B2)\"]}]}], \"datas\": {\"lookFor\": \"Bonjour Projectil-Sogrepress\", \"picture\": \"\", \"lastName\": \"DE TEBA JERONIMO\", \"firstName\": \"Pablo\", \"mainColor\": \"#657d3f\"}}', 1, 49);

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` int(255) NOT NULL,
  `name_fichier` varchar(64) NOT NULL,
  `picture_name` varchar(64) NOT NULL,
  `data` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `name`, `description`, `name_fichier`, `picture_name`, `data`) VALUES
(1, 'TEST 1', 88, 'src/views/modelsCV/model1/index.js', 'http://localhost:82/model-cv-1.png', '{\"left\": [{\"type\": \"informations\", \"details\": [{\"label\": \"Téléphone\", \"values\": [\"+33 X XX XX XX XX\"]}, {\"label\": \"Mail\", \"values\": [\"*************@mail.com\"]}, {\"label\": \"Adresse\", \"values\": [\"45 **0 Ville\"]}, {\"label\": \"Autres\", \"values\": [\"Permis B, véhiculé\", \"Age: XX ans (DD/MM/YYYY)\"]}]}, {\"type\": \"Qualités\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Compétences\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Centres d\'intérêt\", \"details\": [{\"label\": \"\", \"values\": [\"Tennis (Pratique depuis 15 ans)\"]}, {\"label\": \"Associatif\", \"values\": [\"Responsable Com (BDE)\", \"Ambassadeur de l\'école (CODA_)\", \"Cours de tennis dans le club ASPTT\"]}]}, {\"type\": \"Langues\", \"details\": [{\"label\": \"\", \"values\": [\"Français (Langue maternelle)\"]}, {\"label\": \"\", \"values\": [\"Espagnol (C1 Instituto Cervantes)\"]}, {\"label\": \"\", \"values\": [\"Anglais (B1 - B2)\"]}]}], \"datas\": {\"lookFor\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ipsum eros, et rutrum turpis porttitor a. Nullam sapien dui, consequat sit amet tincidunt et, convallis non est. Sed non nisi neque. Integer consectetur convallis iaculis. Ut faucibus orci sed lorem vulputate tincidunt. In egestas tincidunt quam sed sollicitudin. Etiam egestas nunc in dui scelerisque, nec suscipit mi scelerisque. Nam at efficitur justo. Quisque venenatis, orci nec efficitur ultricies, felis.\", \"picture\": \"\", \"lastName\": \"Last Name\", \"firstName\": \"First Name\", \"mainColor\": \"#333\"}}'),
(2, 'TEST 1', 88, 'src/views/modelsCV/model1/index.js', 'http://localhost:82/model-cv-1.png', '{\"left\": [{\"type\": \"informations\", \"details\": [{\"label\": \"Téléphone\", \"values\": [\"+33 X XX XX XX XX\"]}, {\"label\": \"Mail\", \"values\": [\"*************@mail.com\"]}, {\"label\": \"Adresse\", \"values\": [\"45 **0 Ville\"]}, {\"label\": \"Autres\", \"values\": [\"Permis B, véhiculé\", \"Age: XX ans (DD/MM/YYYY)\"]}]}, {\"type\": \"Qualités\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Compétences\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Centres d\'intérêt\", \"details\": [{\"label\": \"\", \"values\": [\"Tennis (Pratique depuis 15 ans)\"]}, {\"label\": \"Associatif\", \"values\": [\"Responsable Com (BDE)\", \"Ambassadeur de l\'école (CODA_)\", \"Cours de tennis dans le club ASPTT\"]}]}, {\"type\": \"Langues\", \"details\": [{\"label\": \"\", \"values\": [\"Français (Langue maternelle)\"]}, {\"label\": \"\", \"values\": [\"Espagnol (C1 Instituto Cervantes)\"]}, {\"label\": \"\", \"values\": [\"Anglais (B1 - B2)\"]}]}], \"datas\": {\"lookFor\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ipsum eros, et rutrum turpis porttitor a. Nullam sapien dui, consequat sit amet tincidunt et, convallis non est. Sed non nisi neque. Integer consectetur convallis iaculis. Ut faucibus orci sed lorem vulputate tincidunt. In egestas tincidunt quam sed sollicitudin. Etiam egestas nunc in dui scelerisque, nec suscipit mi scelerisque. Nam at efficitur justo. Quisque venenatis, orci nec efficitur ultricies, felis.\", \"picture\": \"\", \"lastName\": \"Last Name\", \"firstName\": \"First Name\", \"mainColor\": \"#333\"}}'),
(3, 'TEST 1', 88, 'src/views/modelsCV/model1/index.js', 'http://localhost:82/model-cv-1.png', '{\"left\": [{\"type\": \"informations\", \"details\": [{\"label\": \"Téléphone\", \"values\": [\"+33 X XX XX XX XX\"]}, {\"label\": \"Mail\", \"values\": [\"*************@mail.com\"]}, {\"label\": \"Adresse\", \"values\": [\"45 **0 Ville\"]}, {\"label\": \"Autres\", \"values\": [\"Permis B, véhiculé\", \"Age: XX ans (DD/MM/YYYY)\"]}]}, {\"type\": \"Qualités\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Compétences\", \"details\": [{\"label\": \"\", \"values\": [\"Organisé\"]}, {\"label\": \"\", \"values\": [\"Curieux\"]}, {\"label\": \"\", \"values\": [\"Déterminé\"]}]}, {\"type\": \"Centres d\'intérêt\", \"details\": [{\"label\": \"\", \"values\": [\"Tennis (Pratique depuis 15 ans)\"]}, {\"label\": \"Associatif\", \"values\": [\"Responsable Com (BDE)\", \"Ambassadeur de l\'école (CODA_)\", \"Cours de tennis dans le club ASPTT\"]}]}, {\"type\": \"Langues\", \"details\": [{\"label\": \"\", \"values\": [\"Français (Langue maternelle)\"]}, {\"label\": \"\", \"values\": [\"Espagnol (C1 Instituto Cervantes)\"]}, {\"label\": \"\", \"values\": [\"Anglais (B1 - B2)\"]}]}], \"datas\": {\"lookFor\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ipsum eros, et rutrum turpis porttitor a. Nullam sapien dui, consequat sit amet tincidunt et, convallis non est. Sed non nisi neque. Integer consectetur convallis iaculis. Ut faucibus orci sed lorem vulputate tincidunt. In egestas tincidunt quam sed sollicitudin. Etiam egestas nunc in dui scelerisque, nec suscipit mi scelerisque. Nam at efficitur justo. Quisque venenatis, orci nec efficitur ultricies, felis.\", \"picture\": \"\", \"lastName\": \"Last Name\", \"firstName\": \"First Name\", \"mainColor\": \"#333\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `session_id` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `session_id`) VALUES
(45, 'Pablo', 'DE  TEBA', 'pablo@coda.com', '$2y$10$7/i/tuzFVKFMsfBPiXcQ8OmQCSr4g/3VwlPS8CHBIrUkxv56wHa5i', 'cmv9vonv1kf52fuucup6li835r'),
(46, 'Jean', 'LEROUX', 'jean@coda.com', '$2y$10$Y1mSgNS39bGUVKXLOy/HG.x345QIdGS/PlMrlO3pz5C6LcnDYfyQe', 'p04n57ggq55e29lalpb5f2vueg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cat_cv`
--
ALTER TABLE `cat_cv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `models_id` (`models_id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indexes for table `cvs`
--
ALTER TABLE `cvs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `models_id` (`models_id`),
  ADD KEY `cat_cv_id` (`cat_cv_id`);

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cat_cv`
--
ALTER TABLE `cat_cv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `cvs`
--
ALTER TABLE `cvs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cat_cv`
--
ALTER TABLE `cat_cv`
  ADD CONSTRAINT `cat_cv_ibfk_1` FOREIGN KEY (`models_id`) REFERENCES `models` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cat_cv_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cvs`
--
ALTER TABLE `cvs`
  ADD CONSTRAINT `cvs_ibfk_1` FOREIGN KEY (`models_id`) REFERENCES `models` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cvs_ibfk_2` FOREIGN KEY (`cat_cv_id`) REFERENCES `cat_cv` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
