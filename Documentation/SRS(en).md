# Contents
[Glossary](#Glossary)  
1. [Introduction](#1Introduction)  
    1.1 [Purpose](#11-Purpose)  
    1.2 [Document Conventions](#12-Document-Conventions)  
    1.3 [Product Scope](#13-Product-Scope)  
    1.4 [Analogs](#14-Analogs)  
2. [Overall description](#2-Overall-description)  
    2.1 [Product Perspective](#21-Product-Perspective)    
    2.2 [Product Functions](#22-Product-Functions)  
    2.3 [User Classification](#23-User-Classification)  
    2.4 [Operating Environment](#24-Operating-Environment)  
    2.5 [Design Toolkit](#25-Design-Toolkit)  
    2.6 [Estimated Dependencies](#26-Estimated-Dependencies)  
3. [Interface Requirements](#3-Interface-Requirements)  
    3.1 [User Interface](#31-User-Interface)  
    3.2 [Software Interface](#-32-Software-Interface)  
    3.3 [Communication Interface](#33-Communication-Interface)
4. [System Features](#4-System-features)  
5. [Other non-functional features](#5-Other-non-functional-features)  
    5.1 [Security Requirements](#51-Security-Requirements)  
    5.2 [Quality Attributes](#52-Quality-Attributes)  

# Glossary
*Control Managment System (hereinafter referred to as CMS)* is a web page content management system. It is a set of scripts for creating and editing a site.


# 1. Introduction  
## 1.1 Purpose  
The main goal of the Software Requirement Specification is to describe the purpose and scope of the application/system being designed. The definitions, document conventions adopted within the scope of this project  and a detailed overview of the functionality of this web application are also given. This document is intended for a team of specialists who will implement and support this system.

## 1.2 Document Conventions
CMS - Control Managment System (site content management system).

## 1.3 Product scope  
CMS provides a set of tools for creating and deleting sections of the site, as well as for editing it, which will be useful both for business purposes and for creating a personal blog / site.

## 1.4 Analogs
Unlike the analogues below, in this application all changes can be made in real time, it means that the page will be edited directly during its display.
All existing analogues provide similar functionality for editing the template content and creating your own design:

- *[uCoz](https://www.ucoz.ru/)* - this is a free CMS and hosting for sites created using it. UCoz modules can be used both in a single bundle to create a fully functional website or, for example, as a blog platform, web forum. Currently, more than a million sites where created using this system.  
Disadvantages: partially paid functionality, the difficulty of transferring the site to another CMS.

- *[1C-Bitrix](https://www.bitrix24.by/)* - The system is focused on corporate sites, information and reference portals, social networks, online stores, media sites, but suitable for creating other types of web resources .  
Disadvantages: a rather slow and resource-demanding system.

- *[Joomla](https://www.joomla.org/)* - content management system (CMS), written in PHP and JavaScript, using MySQL as a storage database. An important feature of the system is a minimum set of tools during initial installation, which is supplemented as necessary. This reduces cluttering of the administrative panel with unnecessary elements, and also reduces the load on the server and saves space on the hosting.  
Disadvantages: There is no full editing of tables.

# 2. Overall description
## 2.1 Product Perspective
   This diagram shows the main functional components of this application:
 ![Flow Diagram](https://i.ibb.co/Dtp3Dx8/dfd.png)

## 2.2 Product Functions
   The system allows you to create or delete sections of the site and edit the contents of the proposed template page yourself without involving a specialist. This application provides a choice of several editable template pages:  
        - the home page;  
        - navigation section;  
        - the main page of the site / blog, etc.  

## 2.3 User Classification  
   - business sphere (companies, individual entrepreneurs, etc.) - creation of corporate websites of the company, online stores;  
   - marketing in social networks - blogs, advertising sites;  
   - a regular user - creating your own website, information product.  

## 2.4 Operating Environment
  *Operating system:* UNIX, Microsoft Windows, Operating systems compatible with Microsoft Windows, MacOS.  
  *Browsers:* Google Chrome, Mozilla FireFox, Safari.

## 2.5 Design Toolkit
*Used programming languages:* EcmaScript 6.  
*Markup languages:* HTML5, CSS3.  
*Frameworks:* NodeJS 12.10, VueJS 2, Express 4.14, Bootstrap 4.3.  
  
## 2.6 Estimated Dependencies
  The application works only with a stable Internet connection and the presence of one of the browsers from item [2.4](#24-Operating-Environment).

# 3. Interface requirements
## 3.1 User Interface
  The graphical user interface is presented as mockup illustrations.
  
  The start window of the system.
  ![Start](https://github.com/AnnaGavrilowa/CMS/blob/master/Mockups/start.png?raw=true)
  
  Login window.
  ![SignIn](https://github.com/AnnaGavrilowa/CMS/blob/master/Mockups/SignIn.png)
  
  template selection page.  
  ![Choose](https://github.com/AnnaGavrilowa/CMS/blob/master/Mockups/ChoosePage.png)
  
  Preview the selected page.
  ![Preview](https://github.com/AnnaGavrilowa/CMS/blob/master/Mockups/preview.png)
  
  Page editor.
  ![Edit](https://github.com/AnnaGavrilowa/CMS/blob/master/Mockups/Edit.png)
    
## 3.2 Software interface
  The application is based on a client-server architecture. Approximate system interactions are shown in the diagram below:
  ![Functionality](https://i.ibb.co/6D6LDQq/functionality.png)

## 3.3 Communication Interface
  The interaction between clients and the server will be carried out using the http protocol.
  
# 4. Functional features of the system
This section lists the main functions implemented in this system:
1. * Security: *
   - authorization function by login, password;
2. * Content Management: *
   - creating a page;
   - selection of a template for editing (main menu, contents, main page);
   - editing the page based on the selected template;
   - save page;
3. * Graphic component (client): *
   - a family of functions for creating ui-components.

# 5. Other non-functional features
   ## 5.1 Security Requirements
   This application should ensure the prevention of unauthorized access to information and (or) its transfer to persons who do not have the right to access information. In order to avoid unauthorized access, the application will organize authorization, after which a user session is created.
   
  ## 5.2 Quality attributes

- Ease of use (implemented site navigation);
- Correctness (all declared product functionality is fulfilled);
- Security (before starting work, the system will require a login / password).
