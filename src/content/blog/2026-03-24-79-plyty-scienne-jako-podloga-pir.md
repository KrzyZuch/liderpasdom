---
title: "79. Płyty Ścienne jako Podłoga na Stelażu - Krytyczna Analiza"
description: "Krytyczna analiza nietypowego rozwiązania: płyty ścienne PIR jako podłoga na stelażu stalowym. Problem mostków termicznych, osiadania i bezpieczeństwa."
date: 2026-03-24
tags: ["pir", "budownictwo-pasywne", "konstrukcja", "podloga", "mostki-termiczne", "bezpieczenstwo"]
---

# 79. Płyty Ścienne jako Podłoga na Stelażu - Krytyczna Analiza

*Utworzono: 2026-03-24 21:05*
*Status: Wersja 1.0*
*Priorytet: KRYTYCZNY*

---

## 🚨 OBSERWOWANE NIETYPOWE ROZWIĄZANIE

**Opis sytuacji:** Budynek gdzie:
1. Stelaż stalowy leży bezpośrednio na fundamencie punktowym
2. Na stelażu położone płyty warstwowe PIR ścienne (poziomo!)
3. **OSB na płytach PIR** (sztywnienie)
4. Na OSB podłoga (prawdopodobnie wylewka/laminat)

```
Fundament punktowy
↕️
Stelaż stalowy (belki)
↕️
PŁYTY PIR ŚCIENNE (poziomo!) ← NIETYPOWE
↕️
OSB (sztywnienie)
↕️
Podłoga właściwa
```

**UWAGA:** OSB poprawia sztywność lokalną, ale **nie rozwiązuje głównych problemów!**

---

## 📋 ANALIZA OSB NA PŁYTACH PIR

### Co daje OSB?

| Aspekt | Bez OSB | Z OSB (18-22mm) |
|--------|---------|-----------------|
| Obciążenie punktowe | PIR zgniata się lokalnie | Rozłożone na większą powierzchnię |
| Sztywność podłogi | Bardzo niska | Umiarkowana |
| Mostki termiczne | Bez zmian | Bez zmian |
| Ryzyko przebicia | Wysokie | Niższe, ale nadal istnieje |

### ⚠️ OSB NIE ROZWIĄZUJE:

1. **Mostków termicznych** - stelaż na punktach nadal przewodzi ciepło
2. **Osiadania** - fundamenty punktowe osiadają nierównomiernie
3. **Wilgoci z dołu** - brak izolacji poziomej między gruntem a płytami
4. **Zgniecenia PIR** - tylko rozkłada obciążenie, ale PIR nadal pracuje pod ciężarem

### 📐 OBLICZENIA (szacunkowe):

```
Typowa szafa (200kg) na 4 nogach (4x4cm każdy):
- Bez OSB: 200kg / 64cm² = 3,1 kg/cm² na PIR
- Z OSB 18mm: obciążenie rozłożone na ~400cm² = 0,5 kg/cm² na PIR

Jednak:
- OSB na miękkim PIR = "pływanie"
- Pod obciążeniem OSB się ugina
- Nierównomierność płyt PIR = pękanie OSB
```

---

## ❌ GŁÓWNE PROBLEMY

### 1. **PŁYTY ŚCIENNE → JAKO PODŁOGA**

| Parametr | Ściana (projekt) | Podłoga (rzeczywistość) |
|----------|------------------|------------------------|
| Obciążenie projektowe | Ciśnienie 0,5-1,5 kN/m² (wiatr) | 2,0-5,0 kN/m² + uderzenia |
| Kierunek obciążeń | Poziomy (równomierne) | Pionowy (punktowy!) |
| Rdzeń PIR | Pracuje na ściskanie płaszcze | Może ulec zgnieceniu |

**RYZYKO:** Nogi mebli (4x4cm, obciążenie 100kg = 6,25 kg/cm²) mogą **przebić** rdzeń PIR!

### 2. **FUNDAMENT PUNKTOWY**

Stelaż na punktach = **mostki termiczne** w każdym miejscu styku!

```
Współczynnik mostka Ψ:
- Wymagany (dom pasywny): < 0,01 W/(m·K)
- W tym rozwiązaniu: 0,5-1,0 W/(m·K)
- To jest 50-100x za wysoko! ❌
```

**Skutki:**
- Zawilgocenie spodu podłogi
- Pleśń
- Ogromne straty ciepła

### 3. **BRAK CIĄGŁOŚCI**

| Rozwiązanie prawidłowe ✅ | Rozwiązanie obserwowane ❌ |
|---------------------------|---------------------------|
| Płyta PIR ciągła | Płyty PIR osobno (mostki!) |
| Podłoże sztywne | Punktowe podpory (drgania) |
| Równomierne obciążenie | Koncentracja na belkach |

---

## ✅ POPRAWNE ROZWIĄZANIE

### Wariant A: Płyta fundamentowa

```
Chudy beton 15cm
Folii PE
PIR 15-20cm (ciągły!) ← KLUCZOWE
Folii PE
Wylewka 6-8cm + zbrojenie
```

### Wariant B: System stelaż + belki + płyty

```
Stopa fundamentowa
↕️
Belki stelarza (IPE/HEA) - co 60-120cm
↕️
PŁYTY PODŁOGOWE PIR (specjalne!) - między belkami
↕️
Jastrych zbrojony
```

**RÓŻNICA:** Płyty leżą MIĘDZY belkami, nie NA belkach!

---

## 🎯 OCENA OBSERWOWANEGO ROZWIĄZANIA

| Aspekt | Ocena | Uzasadnienie |
|--------|-------|--------------|
| Bezpieczeństwo | ⚠️ WĄTPLIWE | Brak projektu, dopuszczenia |
| Energooszczędność | ❌ ZŁA | Mostki termiczne |
| Wilgoć/pleśń | ❌ RYZYKO | Brak izolacji |
| Trwałość | ⚠️ NISKA | Pękanie wylewki |
| Komfort | ❌ SŁABY | Drgania |

**PODSUMOWANIE: ❌ NIE ZALECAM do domu stałego**

---

## 📚 NORMY

- PN-EN 1991-1-1: Obciążenia podłóg 2,0 kN/m² minimum
- PN-EN ISO 10211: Mostki termiczne max 0,01 W/(m·K)
- PN-EN 1996: Płyty ścienne NIE jako podłoga

---

## 📝 WNIOSKI

**To "tanie" rozwiązanie to fałszywa oszczędność:**

1. Płyty ścienne NIE nadają się na podłogę
2. Fundament punktowy = klęska cieplna
3. Wylewka na płytach PIR = pęknięcia
4. Ryzyko przebicia przez nogi mebli

**Dla LIDERPASDOM.PL:**
- Wyjaśniać klientom różnicę
- Nie powielać błędnych rozwiązań
- Pokazywać proper alternatywy

---

*Artykuł part of the Liderpasdom.pl knowledge base - Building smarter, not harder.*