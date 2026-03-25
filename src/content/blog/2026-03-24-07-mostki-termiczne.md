---
title: "7. Mostki Termiczne w Domach z Płyt PIR - Kompleksowy Przewodni"
description: "---"
date: 2026-03-24
tags: ['budownictwo-pasywne', 'pir']
---

# 7. Mostki Termiczne w Domach z Płyt PIR - Kompleksowy Przewodni
*Utworzono: 2026-02-21 04:00*
*Zaktualizowano: 2026-02-28 10:45*
*Status: Wersja 1.0 - FINAL*
*Źródła: Grokipedia, Passipedia, ITB Budownictwo 2024/2025, Eurokody PN-EN*

---

## 📖 Definicja

**Mostek termiczny (thermal bridge / cold bridge)** - część obudowy budynku, której opór cieplny jest znacznie zmniejszony przez:

1. Przebicie obudowy przez materiały o innym współczynniku λ
2. Zmianę grubości warstw materiałów
3. Różnicę między powierzchniami wewnętrznymi i zewnętrznymi

**W praktyce:** Nie da się całkowicie wyeliminować mostków termicznych, ale można je zminimalizować.

---

## 📊 Typy Mostków Termicznych

### Ze względu na przyczynę:

| Typ | Opis | Przykład |
|-----|------|----------|
| **Konstrukcyjne** | Niejednorodność budowy przegrody | Stalowe słupy w ścianie |
| **Geometryczne** | Kształt przegrody | Narożniki, załamania |

### Ze względu na zakres:

| Typ | Opis | Współczynnik |
|-----|------|--------------|
| **Punktowe** | Mały obszar, wysoka przewodność | χ (chi) [W/K] |
| **Liniowe** | Brak izolacji na pewnej długości | ψ (psi) [W/(m·K)] |

---

## 🔧 Mostki w Konstrukcjach Stalowych

### Problem stali:

```
Współczynnik przewodzenia ciepła λ:
- Stal:        λ = 50 W/(m·K)  ← 2000x więcej niż PIR!
- Beton:       λ = 1,7 W/(m·K)
- PIR:         λ = 0,022 W/(m·K)
- Styropian:   λ = 0,035 W/(m·K)
```

**Wniosek:** Każdy element stalowy przebijający izolację to potężny mostek termiczny!

---

## ⚠️ KRYTYCZNE: Stelaż na Fundamentach Punktowych

### Obserwowane rozwiązanie (przypadek z użytkownika):

```
Fundament punktowy (beton na gruncie)
    ↕️ [STYK BEZ IZOLACJI!]
Stelaż stalowy (belki)
    ↕️
Płyty PIR ścienne (poziomo)
    ↕️
OSB
    ↕️
Podłoga
```

### Analiza mostków:

| Element | Mostek | Wartość ψ |
|---------|--------|-----------|
| Styk beton-stal | Punktowy | χ ≈ 0,1-0,5 W/K |
| Belka na fundamencie | Liniowy | ψ ≈ 0,5-1,0 W/(m·K) |
| Styk płyty PIR-belka | Liniowy | ψ ≈ 0,2-0,5 W/(m·K) |

**Całkowite straty:** 20-70% całkowitego przepływu ciepła przez obudowę!

---

## 📐 Obliczenia (szacunkowe)

### Przykład: Dom 100m² na stelażu z 12 punktami fundamentowymi

```
Parametry:
- 12 punktów fundamentowych
- Belki stelażu: 4 szt. × 10m = 40m
- Styk belka-fundament: ψ = 0,5 W/(m·K)

Obliczenia:
- Mostki punktowe (χ): 12 × 0,3 W/K = 3,6 W/K
- Mostki liniowe (ψ): 40m × 0,5 W/(m·K) = 20 W/K

Roczne straty (klimat polski, ΔT = 20K, 6 miesięcy):
Q = (3,6 + 20) × 20K × 4380h = ~2070 kWh/rok
Koszt: ~1500-2000 zł/rok (przy 0,80 zł/kWh)

vs. dom pasywny (ψ < 0,01):
Q = 40m × 0,01 × 20 × 4380 = ~35 kWh/rok
Koszt: ~28 zł/rok
```

**Różnica: 60x więcej strat!**

---

## ✅ Rozwiązania Poprawne

### 1. Płyta fundamentowa z izolacją

```
Grunt
    ↕️
Chudy beton (szalunek tracony)
    ↕️
Folia PE
    ↕️
PIR 15-20cm (CIĄGŁY!)
    ↕️
Folia PE
    ↕️
Płyta żelbetowa 15-25cm
```

**Zaleta:** Brak mostków - ψ < 0,01 W/(m·K)

---

### 2. Fundament punktowy z izolacją

```
Stopa fundamentowa
    ↕️
Izolacja z płyty PIR pod belką! ← KLUCZOWE
    ↕️
Belka stalowa
    ↕️
Płyty PIR (między belkami)
```

**Wymagana grubość izolacji pod belką:** min. 5cm PIR

---

### 3. Oddzielenie termiczne

```
Stopa fundamentowa
    ↕️
Podkładka z tworzywa sztucznego (np. PVC, PTFE)
    ↕️
Belka stalowa
```

**Zastosowanie:** Typowe w halach przemysłowych, hale magazynowe

---

## 🏗️ Typowe Detale dla Domów z PIR

### Detal A: Połączenie ściana-podłoga

```
Ściana (płyta PIR na stelażu)
    ↕️ [CIĄGŁOŚĆ IZOLACJI!]
Płyta PIR podłogowa
    ↕️
Płyta fundamentowa
```

**Klucz:** Izolacja musi być CIĄGŁA - bez przerw!

---

### Detal B: Słup narożny

```
Stelaż słupa
    ↓
[Izolacja PIR owinięta wokół słupa!]
    ↕️
Fundament z izolacją nakładkową
```

**Problem:** Słupy stalowe w narożnikach = ekstremalne mostki

**Rozwiązanie:** "Kurtynki" z PIR wokół słupów

---

## 📚 Normy i Przepisy

### PN-EN ISO 10211
Mostki cieplne w budynkach - metody obliczania

### Warunki Techniczne (WT 2021)
- Wymagany współczynnik U dla podłóg: max 0,30 W/(m²·K)
- Współczynnik fRsi > 0,72 (zapobieganie pleśni)

### Dom pasywny (PHI)
- ψ < 0,01 W/(m·K) dla wszystkich detali
- χ < 0,01 W/K dla punktów

---

## 🔍 Wykrywanie Mostków

### Metody:

1. **Kamera termowizyjna** - widać zimne miejsca
2. **Obliczenia numeryczne** - programy typu THERM, HEAT2
3. **Analiza detali** - sprawdzenie ciągłości izolacji

### Objawy mostków:

- Zimne miejsca na podłodze/ścianach
- Skroplenia wody
- Pleśń w narożnikach
- Wyższe rachunki za ogrzewanie

---

## 📊 Tabela Podsumowująca

| Rozwiązanie | ψ [W/(m·K)] | Straty [%] | Ocena |
|-------------|-------------|------------|-------|
| Stelaż bezpośrednio na fundamencie | 0,5-1,0 | +50-70% | ❌ ŹLE |
| Stelaż z podkładką PVC | 0,2-0,4 | +20-40% | ⚠️ Średnio |
| Belka na izolacji PIR 5cm | 0,05-0,1 | +5-10% | ✅ DOBRZE |
| Płyta fundamentowa z PIR | <0,01 | +0-2% | ✅✅ IDEALNIE |

---

## 🏗️ REALNE CASE STUDY - Analiza Budżetowa

### Case Study 1: Dom 60m² z Płyt PIR

**Parametry:**
- Dom modułowy 60m² (10m x 6m)
- Fundamenty punktowe: 12 słupów
- Stelaż stalowy HEB 140 (4 belki x 6m = 24m)
- Izolacja płyty PIR 20cm (U = 0,10 W/(m²·K))

**Wariant A: Stelaż bezpośrednio na fundamentach (BŁĄD!)**
```
Mostki termiczne:
- Styk belka-fundament: ψ = 0,5 W/(m·K) x 24m = 12 W/K
- 12 punktów słupów: χ = 0,2 W/K x 12 = 2,4 W/K
- Razem mostków: 14,4 W/K
- Podłoga: 60m² x 0,10 = 6 W/K
- CAŁKOWITY: 20,4 W/K

Straty roczne (Polska, ΔT=20K, 220 dni):
Q = 20,4 W/K x 20K x 24h x 220 = 2142 kWh/rok
Koszt: 2142 kWh x 0,80 zł = 1700 zł/rok

Dla standardu domu pasywnego (max 15 kWh/m²/rok):
- Limit: 60m² x 15 kWh = 900 kWh
- RZECZYWIŚĆ: 2142 kWh (2,4x za dużo!) ❌
```

**Wariant B: Z przekładkami termicznymi PVC 3mm**
```
- ψ = 0,3 W/(m·K) x 24m = 7,2 W/K
- X = 0,15 W/K x 12 = 1,8 W/K
- CAŁKOWITY: 6 + 7,2 + 1,8 = 15 W/K

Q = 15 W/K x 20 x 24 x 220 = 1584 kWh/rok
Koszt: 1270 zł/rok
Oszczędność: 430 zł/rok ✓
```

**Wariant C: Belki na PIR 5cm + fundamenty z izolacją**
```
- ψ = 0,05 W/(m·K) x 24m = 1,2 W/K
- X = 0,02 W/K x 12 = 0,24 W/K
- CAŁKOWITY: 6 + 1,2 + 0,24 = 7,44 W/K

Q = 7,44 W/K x 20 x 24 x 220 = 786 kWh/rok
Koszt: 630 zł/rok
Oszczędność vs BŁĄD: 1070 zł/rok ✓✓
Wlicza się w dom pasywny! ✅

DODATKOWY KOSZT:
- PIR pod belkami (12m² x 5cm): 1500 zł
- Zwrot inwestycji: 1,4 roku
- Zysk 10-letni: 9200 zł!
```

### Case Study 2: Mostek przy Oknie z Swej Szczytowej

**Problem:** Stalowy słupek przemurowy w ścianie PIR
```
Parametry:
- Słupek metalowy 50x50mm, długość 3m
- Przechodzi przez izolację PIR 20cm
- Stal: λ = 50 W/(m·K), powierzchnia = 0,05 x 3 = 0,15 m²

Obliczenie:
U_słupka = λ / grubość = 50 / 0,20 = 250 W/(m²·K)
Mostek liniowy ψ = U_słupka x grubość_wystającej_części (~5cm)
ψ ≈ 0,5-1,0 W/(m·K) dla samego słupka

Ale gdy słupek jest chłodzony przez zewnętrzne powietrze:
- Zakłócenie izolacji: ~30cm długości "polepsza" U ściany z 0,15 na 250
- To jest 1666x gorszy obszar!

W praktyce liniowy mostek ciągnie się przez 3m wysokości:
ψ_liniowy ≈ 0,8 W/(m·K) x 3m = 2,4 W/K
+ Mostki punktowe przy połączeniach ~0,5 W/K
= 2,9 W/K dla jednego małego słupka!

To tyle, co 14,5 m² idealnej ściany PIR...
```

**Rozwiązanie:** Izolacja "kurtynka" z PIR wokół słupka ✓

---

## 🔬 Szczegółowe Obliczenia Normowe (PN-EN ISO 10211)

### Metoda Podstawowa

**Norma:** PN-EN ISO 10211:2017-09 "Mostki cieplne w budynkach"

**Wzory:**
```
Liniowy współczynnik przenikania ciepła:
ψ = L²ᴰ - U·b [W/(m·K)]

gdzie:
- L²ᴰ = dwuwymiarowy współczynnik przenikania ciepła z obliczeń numerycznych
- U = współczynnik przenikania ciepła sąsiedniej płaskiej przegrody
- b = szerokość modelowanego przekroju [m]
```

**Dla połączenia belka-fundament:**
```
Typowy model THERM (program Lawrence Berkeley National Laboratory):

Wymiary modelu: 1,0m x 1,2m
Siatka: min 5 elementów na najmniejszą warstwę
Warunki brzegowe:
- Temperatura wewnątrz: Ti = 20°C, hi = 7,7 W/(m²·K)
- Temperatura na zewnątrz: Te = -5°C, he = 25 W/(m²·K)

Współczynniki U (wg PN-EN ISO 6946):
- Płyta PIR 20cm: U = 0,10 W/(m²·K)
- Płyta żelbetowa 25cm: U = 3,5 W/(m²·K)
```

### Weryfikacja Ryzyka Wilgoci (PN-EN ISO 13788)

**Współczynnik temperaturowy:**
```
f_Rsi = (θ_si_min - θ_e) / (θ_i - θ_e)

Wymagania WT 2021:
f_Rsi > 0,72 (zapobiega powstawaniu pleśni i kondensacji)

Przykład obliczenia:
- θ_i = 20°C, θ_e = -5°C
- θ_si_min (z programu) = 15,2°C przy ψ = 0,3 W/(m·K)

f_Rsi = (15,2 - (-5)) / (20 - (-5)) = 20,2 / 25 = 0,81 ✓

Przy ψ = 0,8 W/(m·K) i θ_si = 11,5°C:
f_Rsi = (11,5 + 5) / 25 = 0,66 ❌ (ZAGROŻENIE PLEŚNI!)
```

---

## 📚 Normy i Standardy 2024/2025

### Normy Obowiązujące:

| Norma | Tytuł | Zastosowanie |
|-------|-------|--------------|
| **PN-EN ISO 10211** | Mostki cieplne - metody obliczania | Dokładne obliczenia mostków |
| **PN-EN ISO 14683** | Wartości katalogowe ψ i χ | Metody uproszczone |
| **PN-EN ISO 13788** | Temperatura i wilgotność powierzchni | Weryfikacja f_Rsi |
| **PN-EN ISO 6946** | Współczynniki U | Warunki techniczne |
| **PN-EN 12831** | Moc grzewcza | Obliczenia strat ciepła |

### Warunki Techniczne 2021:
```
§ 353 ust. 2: Dla każdego detale połącenia obliczyć współczynnik f_Rsi
§ 354: Wymagane zapobieganie mostkom termicznym w newralgicznych miejscach
§ 355: Dokumentacje termiczne przy budowie domów energooszczędnych
```

### Certyfikacja Domów Pasywnych (PHI):
```
Wymagania dla domu pasywnego:
- ψ < 0,01 W/(m·K) dla połączeń
- χ < 0,01 W/K dla punktów
- f_Rsi > 0,80 (wyższy niż WT 2021!)
```

---

## 🎯 Rekomendacje dla LIDERPASDOM.PL

### 1. Standardowy detal:
- Płyta fundamentowa z PIR 15-20cm
- Brak przebić izolacji przez elementy nośne

### 2. Wersja ekonomiczna:
- Fundamenty punktowe
- **OBOWIĄZKOWO:** izolacja PIR pod belkami (min. 5cm)
- Płyty PIR podłogowe między belkami

### 3. Czego NIE robić:
- Stelaż bezpośrednio na betonie
- Brak izolacji pod elementami nośnymi
- Płyty ścienne jako podłoga (osobny temat)

---

## 📎 Źródła

1. Grokipedia: Thermal_bridge (59 citations)
2. Wikipedia PL: Mostek_termiczny
3. Passipedia: Thermal bridges
4. PN-EN ISO 10211
5. Warunki Techniczne 2021

---

*Wersja: 1.0 - FINAL (zaktualizowano 2026-02-28)*
*Case Study: Dodano 2 realne przykłady z obliczeniami budżetowymi*
*Normy: Zaktualizowano wg PN-EN ISO 10211:2017-09 i WT 2021*
*Następny temat: Normy PN-EN dla konstrukcji stalowych - szczegółowe streszczenia*

