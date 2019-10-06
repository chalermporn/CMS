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
