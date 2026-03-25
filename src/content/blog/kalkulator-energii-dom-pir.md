---
title: "Kalkulator Zapotrzebowania na Energię dla Domu PIR"
description: "Oblicz zapotrzebowanie na ciepło dla domu z płyt PIR. Wzory, współczynniki U i przykłady dla domów 100m²."
date: 2026-03-24
tags: [budownictwo-pasywne, pir, energia, kalkulator, ogrzewanie]
category: "technologia"
---

# Kalkulator Zapotrzebowania na Energię dla Domu PIR

## Wzory i przykłady obliczeń

---

## Parametry Wejściowe

### Parametry Geometryczne Budynku

| Parametr | Symbol | Jednostka | Opis |
|----------|--------|-----------|------|
| Długość | L | m | Wymiar zewnętrzny budynku |
| Szerokość | W | m | Wymiar zewnętrzny budynku |
| Wysokość | H | m | Wysokość w świetle ścian |
| Powierzchnia podłogi | A_f | m² | A_f = L × W |
| Powierzchnia ścian | A_w | m² | A_w = 2×(L+W)×H |
| Powierzchnia dachu | A_r | m² | A_r = L × W |

### Parametry Izolacji PIR

| Parametr | Symbol | Wartość | Jednostka |
|----------|--------|---------|-----------|
| λ PIR | λ_PIR | 0,022 | W/(m·K) |
| Grubość ścian | d_w | 100-200 | mm |
| Grubość dachu | d_r | 150-250 | mm |
| Grubość podłogi | d_f | 80-150 | mm |

### Strefy Klimatyczne Polski

| Strefa | T_zew | Przykładowe miasta |
|--------|-------|-------------------|
| I | -16°C | Szczecin, Zielona Góra |
| II | -18°C | Wrocław, Opole, Poznań |
| III | -20°C | Warszawa, Łódź, Kielce |
| IV | -22°C | Kraków, Rzeszów, Lublin |
| V | -24°C | Suwałki, Białystok |

> ⚠️ **Nowa Ruda (tereny górskie):** T_zew = -22°C (Strefa IV)

---

## Wzory Obliczeniowe

### Współczynnik Przenikania U

**Dla PIR (uproszczony):**

```
U = λ / d [W/(m²·K)]

gdzie: λ = 0,022 W/(m·K) dla PIR
```

**Pełny wzór:**

```
U = 1 / (R_si + d/λ + R_se) [W/(m²·K)]

gdzie:
R_si = opór powierzchni wewnętrznej
R_se = opór powierzchni zewnętrznej
```

### Tabela współczynników U dla PIR:

| Grubość PIR | U (ściana) | U (dach) |
|-------------|------------|----------|
| 80 mm | 0,275 | 0,275 |
| 100 mm | 0,220 | 0,220 |
| 120 mm | 0,183 | 0,183 |
| 150 mm | 0,147 | 0,147 |
| 200 mm | 0,110 | 0,110 |
| 250 mm | - | 0,088 |

---

## Przykładowe Obliczenia - Dom 100m²

### Dane:

- Dom parterowy 10m × 10m = 100m²
- Wysokość ścian: 2,5m
- Grubość PIR: 150mm (ściany), 200mm (dach)
- Lokalizacja: Kotlina Kłodzka (T_zew = -22°C)
- T_wewn = +20°C

### Obliczenia:

**Straty przez ściany:**
- Powierzchnia ścian: 2×(10+10)×2,5 = 100m²
- U = 0,147 W/(m²·K)
- ΔT = 20 - (-22) = 42K
- Straty = 100 × 0,147 × 42 = **617 W**

**Straty przez dach:**
- Powierzchnia dachu: 100m²
- U = 0,110 W/(m²·K)
- Straty = 100 × 0,110 × 42 = **462 W**

**Straty przez podłogę:**
- Powierzchnia: 100m²
- U = 0,110 W/(m²·K) (150mm PIR)
- Straty = 100 × 0,110 × 42/2* = **231 W**

*Współczynnik 1/2 dla podłogi (grunt częściowo izoluje)

### SUMA: **1310 W = 1,31 kW**

---

## Porównanie z domem tradycyjnym

| Typ budynku | Zapotrzebowanie na ciepło |
|-------------|---------------------------|
| **Dom PIR (150mm)** | **~15 kWh/m²/rok** |
| Dom murowany (30cm styropian) | ~50-80 kWh/m²/rok |
| Dom tradycyjny (bez izolacji) | ~150-200 kWh/m²/rok |

---

## Jak obniżyć zapotrzebowanie?

1. **Zwiększ grubość PIR** - 200mm zamiast 150mm
2. **Eliminuj mostki termiczne** - szczególna uwaga przy połączeniach
3. **Okna trójszybowe** - Uw < 0,8 W/(m²·K)
4. **Rekuperacja** - odzysk ciepła z wentylacji
5. **Kompensacja solarna** - zyski od słońca przez okna

---

## Wniosek

**Dom z płyt PIR 150mm zużywa nawet 3-10x mniej energii niż dom tradycyjny!**

Przy cenie prądu ~1,50 zł/kWh roczne koszty ogrzewania domu 100m² to zaledwie:
- **Dom PIR:** ~2250 zł/rok
- **Dom tradycyjny:** ~7500-15000 zł/rok

---

## Normy i Źródła

- PN-EN 12831 - Obliczanie zapotrzebowania na ciepło
- PN-EN ISO 10211 - Mostki termiczne
- Warunki Techniczne 2021