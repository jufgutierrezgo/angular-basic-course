# Installation Guide: Node.js, Angular CLI, and Visual Studio Code

This guide explains how to install **Node.js**, **Angular CLI**, and **Visual Studio Code (VS Code)** on **Windows, Linux, and macOS**.

---

## 1. Install Node.js (includes npm)

Node.js is required to run Angular and comes with **npm** (Node Package Manager).

### Windows
1. Go to [Node.js official website](https://nodejs.org).
2. Download the **LTS (Recommended)** version for Windows.
3. Run the installer and follow the steps (keep default options).
4. Verify installation:
   ```bash
   node -v
   npm -v
   ```

### Linux (Debian/Ubuntu)
```bash
sudo apt update
sudo apt install -y nodejs npm
node -v
npm -v
```

For the latest version, use [NodeSource setup](https://github.com/nodesource/distributions).

### macOS
1. Install [Homebrew](https://brew.sh) if not already installed.
2. Run:
   ```bash
   brew install node
   ```
3. Verify:
   ```bash
   node -v
   npm -v
   ```

---

## 2. Install Angular CLI

Angular CLI (Command Line Interface) helps create and manage Angular projects.

Run:
```bash
npm install -g @angular/cli
```

Verify:
```bash
ng version
```

---

## 3. Install Visual Studio Code (VS Code)

### Windows
1. Download installer from [Visual Studio Code](https://code.visualstudio.com).
2. Run installer (keep default options).

### Linux
- **Debian/Ubuntu**:
  ```bash
  sudo apt update
  sudo apt install -y wget gpg
  wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
  sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
  sudo apt update
  sudo apt install code
  ```

- **Fedora/CentOS/RHEL**:
  ```bash
  sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
  sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
  sudo dnf check-update
  sudo dnf install code
  ```

### macOS
1. Install with Homebrew:
   ```bash
   brew install --cask visual-studio-code
   ```

---

## 4. Verify Setup

1. Open VS Code.
2. Create a new Angular project:
   ```bash
   ng new my-app
   cd my-app
   ng serve
   ```
3. Open your browser at: [http://localhost:4200](http://localhost:4200)

✅ You are ready to build Angular applications!
