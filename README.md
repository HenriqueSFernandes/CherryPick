<div align="center">
    <img alt="Banner" src="./assets/banner.png">
</div>

<p align="center">
  <a href="https://github.com/HenriqueSFernandes/CherryPick/actions/workflows/deploy.yml">
    <img alt="Deploy" src="https://img.shields.io/github/actions/workflow/status/HenriqueSFernandes/CherryPick/deploy.yml?label=Deploy&logo=githubactions&logoColor=white&labelColor=0b2e44&color=b41b27">
  </a>
  <a href="https://github.com/HenriqueSFernandes/CherryPick/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/HenriqueSFernandes/CherryPick?label=Issues&labelColor=0b2e44&color=b41b27" />
  </a>
  <a href="https://github.com/HenriqueSFernandes/CherryPick/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/HenriqueSFernandes/CherryPick?label=PRs&labelColor=0b2e44&color=b41b27" />
  </a>
  <a href="https://github.com/HenriqueSFernandes/CherryPick/actions/workflows/check.yml">
    <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/HenriqueSFernandes/CherryPick/lint.yml?label=Checks&logo=eslint&logoColor=white&labelColor=0b2e44&color=b41b27">
  </a>
</p>

<p align="center">
  <a href="https://github.com/HenriqueSFernandes/CherryPick/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/HenriqueSFernandes/CherryPick?style=flat&logo=github&logoColor=white&label=Stars&labelColor=0b2e44&color=b41b27" />
  </a>
  <a href="https://www.figma.com/design/gPBEkQUZbiTJnn7XmYfYIN/Untitled?node-id=59-18&t=D8GtG0ijODsHL7bv-1">
    <img alt="Figma Project" src="https://img.shields.io/badge/Figma-577f4e?logo=figma&logoColor=white">
  </a>
  <a href="https://taikai.network/shift-appens/hackathons/shift-appens-2025/projects/cma5qmwbm0dghu9xxhfum3wlk/idea">
    <img alt="Taikai Project" src="https://img.shields.io/badge/Taikai-577f4e">
  </a>
  <a href="https://github.com/HenriqueSFernandes/CherryPick/blob/main/LICENSE">
    <img alt="License: EPL" src="https://img.shields.io/github/license/HenriqueSFernandes/CherryPick?label=License&logo=readthedocs&logoColor=white&labelColor=0b2e44&color=b41b27" />
  </a>
</p>

> [!WARNING]
> **Complete System Overhaul in Progress**
>
> This project is currently undergoing a **full architectural and codebase redesign**.
> The current documentation only applies to the initial hackathon prototype, available under the `cherrypick-v1` tag.
>
> Everything beyond that, including code, structure, and functionality, is subject to major changes and should be considered obsolete for now.
>
> ✅ Please refer to the `cherrypick-v1` tag for the last stable version of the original prototype.
> 
> 🔧 A fully reworked version is being developed from scratch.

# Table of Contents

- [Project Overview](#project-overview)
- [Development Setup](#development-setup)
- [The Team](#the-team)

# Project Overview

<h4 align="center">
🍒 Fresh Picks, Perfectly Paired 🍒
</h4>

Cultural recommendation systems often stay confined to a single format: streaming platforms suggest more shows, bookstores suggest more books and so on. But users don't experience culture through a single channel — they move between music, films, literature, and series, looking for content that shares a certain flavour.

**Cherry Pick** addresses this gap by offering cross-format recommendations. The user inputs their *pick* — a book, movie, show, or album — and receives a selection of perfect *pairs* from different media types. 

# Development Setup

> In order to run this project, you need `Node.js` (>= 18.17.0) and `npm` installed. We recommend using `nvm` for this.

## Frontend

1. Install the dependencies.
  ```bash
  npm install
  npm run prepare
  ```

2. Install and deploy [Appwrite](https://appwrite.io/docs/advanced/self-hosting).

3. Create the `.env.local` file with your Appwrite credentials. You can use the `.env.example` as a basis for this.

4. Run the development server:
  ```bash
  npm run dev
  ```

## Backend

1. Install the dependencies.
  ```bash
  npm install
  ```

2. Run the development server:
  ```bash
  npm run dev
  ```

# The Team

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/42045371?v=4" width="auto" height="auto" alt="Bruno Oliveira">
      <br>
      <b>Bruno Oliveira</b>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/116096892?v=4" width="auto" height="auto" alt="Clara Sousa">
      <br>
      <b>Clara Sousa</b>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/85371550?v=4" width="auto" height="auto" alt="Henrique Fernandes">
      <br>
      <b>Henrique Fernandes</b>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/123483459?v=4" width="auto" height="auto" alt="Rodrigo Coelho">
      <br>
      <b>Rodrigo Coelho</b>
    </td>
  </tr>
</table>

