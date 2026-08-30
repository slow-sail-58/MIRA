# MIRA
# MIRA — Medical Intelligence & Response Assistant

MIRA is an AI-powered healthcare companion designed to improve medication adherence, medical record accessibility, emergency response, and continuity of care for elderly and chronic-care patients, with a focus on rural and underserved communities.

# Features

### Smart Medication Management

* Upload prescriptions as images or documents.
* Use OCR/AI to extract medicine names, dosage, frequency, timing, and duration.
* Automatically generate personalized medication schedules.
* Get reminders for upcoming doses.
* Track taken and missed doses.
* Receive refill and prescription-expiry reminders.
* Maintain a complete list of current and previous medications.

### AI Health Assistant

* Provide a conversational chatbot that explains the purpose, general usage, precautions, and common questions related to prescribed medicines in simple language.
* Help users navigate MIRA and understand features such as medication schedules, medical records, reminders, and emergency functions.
* Provide personalized assistance based on the user's medication profile and stored information, while not replacing a doctor or pharmacist.

### Medication Intelligence

* Provide information about the purpose and usage of prescribed medicines.
* Detect potential duplicate medications.
* Flag potential medication interactions or conflicts.
* Identify scheduling conflicts between medicines.
* Provide safety warnings while keeping medication decisions under the supervision of doctors/pharmacists.

### Digital Medical Records

* Maintain a longitudinal medical profile for each patient.
* Store prescriptions, diagnoses, allergies, medical conditions, medications, and relevant reports.
* Keep previous prescriptions and treatment history accessible in one place.
* Enable authorized healthcare workers and caregivers to update patient information.
* Support secure, controlled access to sensitive medical information.

### Emergency Medical ID

* Generate a secure QR-based Medical ID for each patient.
* Display the QR code on the patient's lock screen for quick access during emergencies.
* Allow authorized/appropriate responders to access essential emergency information such as:

  * Blood group
  * Critical allergies
  * Major medical conditions
  * Current medications
  * Emergency contacts
* Keep detailed medical records protected behind authorized access.

### Emergency Assistance

* Provide a one-tap emergency/SOS mechanism.
* Share the patient's current location with designated emergency contacts.
* Provide essential medical information to assist responders.
* Support emergency escalation workflows where appropriate.
* Designed for situations such as seizures, falls, unconsciousness, or other critical incidents.

### Caregiver & Family Support

* Allow caregivers to manage a patient's medical profile.
* Monitor medication adherence and missed doses.
* Receive important medication and follow-up alerts.
* Help elderly patients who may not be comfortable using smartphones independently.
* Support management of multiple patients from a caregiver account.

### Healthcare Worker / ASHA Mode

* Register and onboard patients.
* Digitize prescriptions during patient visits.
* Verify and manage medication schedules.
* Maintain and update patient medical records.
* Track patients requiring follow-up.
* Identify high-risk or frequently non-adherent patients.
* Help bridge the digital divide in underserved communities.

### Offline-First Healthcare Support

* Keep essential patient and medication information available without continuous internet access.
* Allow medication reminders to function offline.
* Provide access to locally stored emergency medical information.
* Synchronize data when connectivity becomes available.
* Minimize dependence on high-speed or continuous internet connectivity.

### Medicine Availability & Price Comparison

* Search for prescribed medicines.
* Compare prices across available pharmacies and online sources.
* Show nearby pharmacies and medicine availability where data is available.
* Highlight potentially lower-cost alternatives.
* Encourage consultation with a doctor/pharmacist before substituting prescribed medication.

### Privacy & Security

* Use controlled access for sensitive medical information.
* Separate emergency information from complete medical records.
* Provide role-based access for patients, caregivers, and healthcare workers.
* Protect patient data during storage and transmission.
* Follow a minimum-necessary-information approach for emergency access.

# Tech Stack

## Mobile Application

* **React Native + Expo** — Cross-platform mobile development
* **TypeScript** — Type-safe application development
* **NativeWind / Tailwind CSS** — UI styling
* **React Navigation** — App navigation
* **Expo Notifications** — Medication reminders and alerts
* **Expo Location** — GPS-based emergency assistance
* **Expo Camera / Barcode Scanner** — QR-based Medical ID

## Backend

* **Node.js + Express.js** — REST API and backend services
* **TypeScript** — Backend development

## Database & Backend Services

* **Supabase** — Backend-as-a-Service
* **PostgreSQL** — Patient, medication, and medical-record database
* **Supabase Auth** — Authentication and role-based access
* **Supabase Storage** — Secure storage of prescriptions and medical documents
* **Row Level Security (RLS)** — Patient-data access control

## AI & OCR

* **Python + FastAPI** — AI/OCR microservices
* **OCR** — Prescription text extraction
* **LLM API** — MIRA AI Health Assistant and intelligent prescription processing
* **RAG** — Grounding chatbot responses in trusted medical information

## Offline Support

* **SQLite / Expo SQLite** — Local storage for essential patient and medication data
* **Offline-first architecture** — Medication reminders and essential medical information remain available without continuous internet connectivity
* **Background synchronization** — Sync local data with the cloud when connectivity is restored

## Emergency Services

* **QR Code / Medical ID** — Quick access to essential emergency information
* **GPS / Location Services** — Real-time patient location
* **Push Notifications** — Emergency and caregiver alerts
* **Calling/SMS Integration** — Emergency contact notification

## Healthcare Worker Dashboard

* **React + TypeScript**
* **Vite**
* **Tailwind CSS**
* **Supabase**

Used for:

* Patient registration
* Prescription management
* Medication schedules
* Follow-up tracking
* High-risk patient monitoring
* Medical-record management

## Medicine Availability & Price Comparison

* **Node.js / Express API**
* **PostgreSQL / Supabase**
* Pharmacy and online medicine data sources
* Location-based pharmacy search

## Deployment & DevOps

* **GitHub** — Version control and collaboration
* **Vercel** — Web dashboard deployment
* **Render / Railway** — Backend deployment
* **Expo EAS** — Mobile application builds and deployment

## Architecture

```text
React Native + Expo
        │
        │ REST API / Auth
        ↓
Node.js + Express
        │
   ┌────┼───────────────┐
   ↓    ↓               ↓
Supabase  AI/OCR       Emergency
   │      Service       Services
   ↓        │
PostgreSQL  ↓
          FastAPI
             │
             ↓
            LLM

        ↕
   Offline SQLite
        ↕
  Background Sync
```
# Installation & Setup

## Mobile Application

MIRA is currently being developed as a **React Native + Expo mobile application**.

### Development

Install the project dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can then:

* Scan the QR code using **Expo Go** on an Android device.
* Press `a` to run the application on an Android emulator.
* Press `w` if web support is enabled for development.

### Android Build

For creating an installable Android build:

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android
```

The generated build can be installed on Android devices for testing and demonstration.

### Production Deployment

The production Android application will be distributed through the **Google Play Store** after development and testing are complete.

> **MIRA is currently focused on Android mobile development. A web-based healthcare-worker dashboard may be introduced in a future version.**

---

## Developer Setup

Clone the repository:

```bash
git clone https://github.com/<your-username>/MIRA.git
cd MIRA
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_AI_API_KEY=your_ai_api_key
```

> **Never commit ****`.env`**** files or API keys to GitHub.**

Start the application:

```bash
npx expo start
```
