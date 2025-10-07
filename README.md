# ✂️ FSW Barber — Plataforma de Agendamentos para Barbearias

> Projeto full‑stack para gerenciamento de **barbearias, barbeiros, horários e agendamentos** usando **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, **Prisma** e **Docker**. O objetivo é oferecer um boilerplate produtivo, com padrões de código e automações de DX (Husky + lint-staged).

![Banner](public/banner-01.png)

---

## 📌 Sumário

- [Visão geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Stack técnica](#-stack-técnica)

---

## 🧠 Visão geral

Este repositório contém um app web para **agendamento online de serviços** em uma barbearia. Clientes escolhem **barbeiro, serviço, data/horário**; administradores/gestores controlam **catálogo, disponibilidade e confirmações**.

> **Nota:** o projeto foi criado para estudos/portfolio e pode ser adaptado para produção. Ajuste regras de negócio, autenticação, pagamentos e observabilidade conforme sua necessidade.

---

## 🧩 Funcionalidades

- Cadastro e edição de **serviços** (ex.: corte, barba, combo).
- Gestão de **barbeiros** e **agenda** (janelas de atendimento/folgas).
- **Agendamentos** com seleção de data/horário e confirmação.
- UI moderna com **shadcn/ui** + Tailwind.
- Camada de dados com **Prisma ORM**.
- Pronto para **Docker Compose** (app + banco).
- Padrões de código com **ESLint/Prettier** e ganchos **Husky**.

> Alguns módulos podem estar em desenvolvimento. Confira os _issues_ e o `README` para instruções de setup.

---

## 🛠️ Stack técnica

- **Next.js 14+ (App Router)** + **TypeScript**
- **TailwindCSS** + **shadcn/ui**
- **Prisma** (PostgreSQL por padrão)
- **Docker / Docker Compose**
- **ESLint**, **Prettier**, **Husky** + **lint-staged**

---

## ✅ Pré-requisitos

- **Node.js 18+** e **npm** (ou **pnpm/yarn**)
- **Docker** e **Docker Compose** (opcional, mas recomendado)
- Banco **PostgreSQL** (local, Docker ou gerenciado)

---
