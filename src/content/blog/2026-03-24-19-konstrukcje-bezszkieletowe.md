---
title: "19. Konstrukcje Bezszkieletowe"
description: "Kompleksowy przewodnik o 19. konstrukcje bezszkieletowe w budownictwie PiR. Dowiedz się więcej o technologiach i rozwiązaniach na rok 2026."
date: 2026-03-24
tags: ["budownictwo-pasywne", "pir"]
---

# 19. Konstrukcje Bezszkieletowe
*Utworzono: 2026-02-21*
*Status: Wersja 1.0 - Uzupełniona o normy*

---

## 📖 Definicja

Konstrukcje bezszkieletowe (samonośne) to płyty PIR zamontowane bez stelaża stalowego - płyty same przenoszą obciążenia. Ściany składają się bezpośrednio z płyt warstwowych połączonych ze sobą, tworząc rusztownię o stateczności zapewnionej przez płaszczyzny ścian.

---

## ⚠️ Ograniczenia Techniczne

| Parametr | Max dla bezszkieletu | Uzasadnienie |
|----------|---------------------|--------------|
| **Rozpiętość** | 6-8m | Przy bezpośrednim oparciu na fundamencie |
| **Powierzchnia** | 100-150m² | Małe obiekty - zabudowa szeregowa możliwa |
| **Wysokość** | 3-4m | Przy ścianach oporowych lub kotwieniu |
| **Obciążenie śniegiem** | Strefa 1-2 max | Sprawdzić obliczenia stateczności (PN-EN 1991-1-3) |
| **Liczba kondygnacji** | 1-2 | Maks 2 - wymaga szczegółowych obliczeń |

**⚠️ WAŻNE:** Im większa powierzchnia, tym większe ryzyko niestateczności przy silnym wietrze!

---

## 📐 NORMY I STANDARDY

### PN-EN 14509: Samonośne płyty warstwowe z rdzeniem sztywnym
**KLUCZOWA NORMA DLA KONSTRUKCJI BEZSZKIELETOWYCH!**

**Wymagania dla płyt używanych jako konstrukcja nośna:**

| Właściwość | Symbol | Wymagania | Metoda |
|------------|--------|-----------|--------|
| Wytrzymałość na zginanie | M [Nm/m] | ≥ 1000-2000 (zależnie od grubości) | EN 14509 A.3 |
| Wytrzymałość na odrywanie rdzenia | - | Śruby nośne max co 500mm | EN 14509 A.6 |
| Ścinanie rdzeń-płaszcze | - | Bez pękania | EN 14509 |

**Typowe oznaczenie płyty nośnej:**
```
PW-3000/M-150/B-s1,d0
- PW-3000 = wytrzymałość na zginanie [Nm/m]
- M = klasa nośności na zginanie
- 150 = grubość [mm]
- B-s1,d0 = reakcja na ogień
```

### PN-EN 1991-1-4: Obciążenia wiatrem (Eurokod 1)
**STATECZNOŚĆ KONSTRUKCJI BEZSZKIELETOWEJ TO PRIORYTET!**

**Współczynniki aerodynamiczne (Cpe) dla ścian długich:**

| Strefa na ścianie | Współczynnik Cpe | Siła |
|-------------------|------------------|------|
| Narożnik nawietrzny | +0.8 | Parcie |
| Środek ściany | +0.5 do +0.8 | Parcie |
| Narożnik zawietrzny | -1.0 do -0.5 | **Ssanie!** |
| Ściana zawietrzna | -0.5 | **Ssanie** |

**Zagrożenia:**
- ⚠️ **Ssanie zawietrzne** - płyty mogą zostać podciągnięte/wyrwane z połączeń!
- ⚠️ **Parcie boczne** - szczytownice mogą paść na boki
- ⚠️ **Podciśnienie dachu** - ryzyko uniesienia zwierciadła dachu

**Obliczenia wymagane (PN-EN 1990):**
- Stan graniczny nośności (ULS) - stateczność
- Stan graniczny użytkowalności (SLS) - odkształcenia

**Wzór sprawdzający:**
```
γ0 × qv × h × d / (Σ śrub × Rax,łącza) ≤ 1.0

Gdzie:
- γ0 = 1.5 (współczynnik bezpieczeństwa dla wiatru)
- qv = ciśnienie wiatru [kN/m²]
- h = wysokość ściany [m]
- d = rozstaw śrub w pionie [m]
- Rax,łącza = nośność połączenia na odrywanie [kN/śruba]
```

### PN-EN 1090-2: Wykonanie konstrukcji stalowych
**Mimo braku szkieletu - płyty mają okładziny stalowe!**

**Klasy wykonania dla konstrukcji samonośnych:**
- **EXC2** - minimum dla domów z płyt PIR
- **EXC3** - dla budynków użyteczności publicznej z płyt

**Wymagania:**
- Tolerancje poziomowania: ±3mm na 3000mm
- Tolerancje pionowości: H/600 (H = wysokość)
- Połączenia śrubowe: klasa 8.8 minimum!

### PN-EN 16846: Konstrukcje szkieletowe lekkie
**KONSTRUKCJE BEZSZKIELETOWE WYMAGAJĄ ANALOGICZNEGO PODEJŚCIA!**

**Zasady stosowalne:**
- Kotwienie fundamentowe → narożne mocowania hakiem
- Komora warstwowa płyty → stężenie stateczności
- Połączenia poszyciowe → przenoszenie sił ścinających

---

## 🔧 DETALE WYKONAWCZE KRYTYCZNE

### 1. Kotwienie fundamentowe
**Wymagania konstrukcyjne:**
- Obustronne mocowanie płyt w rogach
- Profile zimnogięte "Lub U" na dole ścian
- Kotwy chemiczne M10-M12 co 500-800mm
- **Weryfikacja obliczeniowa obowiązkowa!**

### 2. Połączenia między płytami
**Systemy łączenia:**
- Listwy pozycyjne (zatrzaski) - szybkie, ale słabsze
- Śruby samowiercące - min. Ø4.8mm, min. 6 szt./mb
- **Klejenie konieczne** dla stateczności poziomej

### 3. Związ pionowy (stateczność boczna)
**Bez szkieletu - stateczność z płaszczyzn:**
- Płaszczyzny ścian muszą tworzyć szyty "pudełko"
- Ukosnice w rogach (płyty ryglujące)
- Stężenia na wybranych przegrodach

### 4. Dach jako statecznienie
**Wymagania:**
- Konstrukcja dachu musi sztywno łączyć ściany szczytowe
- Jętki lub belki wiązujące górne krawędzie ścian
- Obciążenie dachu sztywno zabetonowane w płaty płyt

---

## 🏠 ZASTOSOWANIA (Z NORMĄ!)

### ✅ Dopuszczalne (z aprobatą ITB):
| Zastosowanie | Warunki | Przypis normowy |
|-------------|---------|-----------------|
| Budynki gospodarcze | Do 50m², strefa 1-2 | WT 2021 §4.2 |
| Małe domki letniskowe | Do 35m², 1 kondygnacja | Uzgodnienie z UIK |
| Wiata magazynowa | Do 100m², bez inspekcji | PN-EN 1990 klasa konsekwencji CC2 |
| Pawilon handlowy | Do 70m², użytkowanie tymczasowe | PN-EN 1090 EXC2 |

### ❌ NIEDOPUSZCZALNE:
| Konstrukcja | Przyczyna blokady |
|-------------|------------------|
| Dom mieszkalny stały | Brak aprobaty ITB dla domu całorocznego |
| Powyżej 150m² | Stateczność niemożliwa do zapewnienia |
| Strefa śniegowa 4-5 | Obciążenie >1,0 kN/m² nie do udźwignięcia |
| Tereny wietrzne (strefa 3) | Ssanie >1,5 kN/m² - przekracza nośność |
| Konstrukcje nad 2 kondygnacje | PN-EN 1990 - brak metod obliczeniowych |

---

## 📋 CHECKLIST PROJEKTOWA

Przed projektem bezszkieletu koniecznie zweryfikuj:

- [ ] **Obliczenia stateczności** (PN-EN 1991-1-4) - inżynier konstruktor
- [ ] **Mapa strefy śniegowej** - max 2, częściej 1
- [ ] **Mapa strefy wiatrowej** - max 2, UNIKAĆ 3
- [ ] **Aprobata ITB** na dany system płyt
- [ ] **Weryfikacja połączeń** - rysunki węzłów
- [ ] **Wymagania UIK** - zgoda na technologię

---

## 🔗 PODOBNE TEMUATY
- [03_PULAPKI_ELEMENTY_HAL.md](03_PULAPKI_ELEMENTY_HAL.md) - wytrzymałość płyt
- [04_KONSTRUKCJE_WSPORCZE_DACHU.md](04_KONSTRUKCJE_WSPORCZE_DACHU.md) - statecznienie
- [NORMY_STRESZCZENIA.md](NORMY_STRESZCZENIA.md) - pełne streszczenia norm

---

*Wersja: 1.0 - z normami PN-EN 14509, 1991-1-4, 1090-2, 16846*

