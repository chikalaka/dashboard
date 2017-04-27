# Cyber Dashboard Threats
Quick view of details regarding cyber attacks

# Usage

### Installation

    git clone https://github.com/chikalaka/dashboard.git
    npm install

### run

    npm start

npm start will migrate additional data to your db (named "myapp")

### Schema Structure (example):
```
{
  "Name": "ClearWeb",
  "Types": {
      "AttackIndication": 118,
      ...
  },
  "Severities": {
      "High": 144,
      ...
  },
  "Sources": {
      "ApplicationStores": 1.5437392795883362,
      ...
  }
}
```