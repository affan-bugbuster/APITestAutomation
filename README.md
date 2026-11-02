# API Test Automation

A robust API Test Automation framework designed to validate REST APIs through automated test execution. This project aims to ensure API reliability, maintainability, and fast feedback during development by supporting automated functional, regression, and integration testing.

## 🚀 Features

* Automated REST API testing
* Request and response validation
* JSON schema and data verification
* Authentication support (Bearer Token/API Key/Basic Auth)
* Configurable environments
* Detailed test reports
* Easy integration with CI/CD pipelines
* Reusable utilities and test components

---

## 🛠️ Tech Stack

* Playwright
* API
* GitHub Actions

---

## 📂 Project Structure

```text
APITestAutomation/
├── src/
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   └── test/
│       ├── java/
│       └── resources/
├── test-data/
├── reports/
├── pom.xml
└── README.md
```

---

## ⚙️ Prerequisites

Before running the project, ensure you have:

* Java 17 or later
* Maven 3.8+
* Git
* An IDE such as IntelliJ IDEA or Eclipse

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/affan-bugbuster/APITestAutomation.git
```

Navigate to the project directory:

```bash
cd APITestAutomation
```

Install dependencies:

```bash
mvn clean install
```

---

## ▶️ Running Tests

Run all tests:

```bash
mvn test
```

Run a specific test class:

```bash
mvn -Dtest=TestClassName test
```

---

## 📊 Test Reports

After execution, reports can be found in the project's report directory.

Example:

```text
reports/
```

or

```text
target/
```

(depending on your reporting framework)

---

## 🌍 Environment Configuration

Store environment-specific values such as:

* Base URL
* Authentication tokens
* Credentials
* API Keys

inside configuration or properties files.

Example:

```properties
baseUrl=https://api.example.com
username=your_username
password=your_password
```

---

## ✅ Sample Test Coverage

The framework can be used to automate:

* GET requests
* POST requests
* PUT requests
* PATCH requests
* DELETE requests
* Status code validation
* Response body validation
* Header validation
* Response time verification
* Authentication testing
* Negative test scenarios

---

## 🔄 CI/CD

The framework can be integrated with:

* GitHub Actions
* Jenkins
* Azure DevOps
* GitLab CI

to automatically execute tests on every commit or pull request.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. Feel free to modify this project according to your needs.

---

## 👤 Author

**Affan**

GitHub: https://github.com/affan-bugbuster

---

⭐ If you find this project useful, consider giving it a star on GitHub!
