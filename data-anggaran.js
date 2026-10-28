// Seluruh angka di bawah adalah data dummy untuk demonstrasi PELITA.
    const datasets = {
      sumba: { name: "Kabupaten Sumba Timur", short: "Sumba Timur", schools: 24, budget: 12.0, realized: 8.4, categories: [[6.0,4.2],[3.6,2.8],[2.4,1.4]] },
      sabu:  { name: "Kabupaten Sabu Raijua", short: "Sabu Raijua", schools: 18, budget: 9.0, realized: 6.1, categories: [[4.0,2.8],[2.8,1.9],[2.2,1.4]] },
      rote:  { name: "Kabupaten Rote Ndao", short: "Rote Ndao", schools: 21, budget: 10.5, realized: 7.2, categories: [[5.2,3.7],[3.1,2.1],[2.2,1.4]] },
      alor:  { name: "Kabupaten Alor", short: "Alor", schools: 27, budget: 14.0, realized: 9.5, categories: [[7.0,4.8],[4.0,2.9],[3.0,1.8]] },
      belu:  { name: "Kabupaten Belu", short: "Belu", schools: 22, budget: 11.0, realized: 7.7, categories: [[5.5,3.9],[3.2,2.3],[2.3,1.5]] }
    };

    const region = document.getElementById("region");
    const year = document.getElementById("year");
    const level = document.getElementById("level");

    function decimal(value) {
      return value.toFixed(1).replace(".", ",");
    }

    function money(value) {
      return "Rp" + decimal(value) + " M";
    }

    function setBar(id, value, max) {
      document.getElementById(id).style.width = Math.max(0, Math.min(100, value / max * 100)) + "%";
    }

    function updateDashboard() {
      const data = datasets[region.value];
      const selectedYear = year.value.match(/\d{4}/)?.[0] || "2026";
      const schoolLevel = level.value.includes("SD &") ? "SD & SMP" : level.value.replace("▼ ", "");
      const yearFactor = selectedYear === "2026" ? 1 : selectedYear === "2025" ? 0.92 : 0.85;
      const levelFactor = schoolLevel === "SD" ? 0.58 : schoolLevel === "SMP" ? 0.42 : 1;
      const budget = data.budget * yearFactor * levelFactor;
      const realized = data.realized * yearFactor * levelFactor;
      const pct = Math.round(realized / budget * 100);
      const categories = data.categories.map(([b, r]) => [b * yearFactor * levelFactor, r * yearFactor * levelFactor]);
      const max = Math.max(...categories.map(c => c[0]));

      document.getElementById("regionTitle").textContent = data.name;
      document.getElementById("periodText").textContent = `Januari–September ${selectedYear} • ${data.schools} sekolah contoh`;
      document.getElementById("budgetTotal").textContent = money(budget);
      document.getElementById("realizedTotal").textContent = money(realized);
      document.getElementById("realizedPercent").textContent = `${pct}% dari anggaran`;
      document.getElementById("chartRegion").textContent = `${data.short} • Tahun anggaran ${selectedYear}`;

      const ids = [
        ["rehabBudgetBar","rehabRealBar","rehabBudgetValue","rehabRealValue"],
        ["suppliesBudgetBar","suppliesRealBar","suppliesBudgetValue","suppliesRealValue"],
        ["opsBudgetBar","opsRealBar","opsBudgetValue","opsRealValue"]
      ];

      categories.forEach(([b, r], i) => {
        setBar(ids[i][0], b, max);
        setBar(ids[i][1], r, max);
        document.getElementById(ids[i][2]).textContent = decimal(b);
        document.getElementById(ids[i][3]).textContent = decimal(r);
      });

      document.querySelector(".axis").innerHTML =
        `<span>0</span><span>${decimal(max/3)}</span><span>${decimal(max*2/3)}</span><span>${decimal(max)}</span>`;
    }

    document.getElementById("showBudget").addEventListener("click", () => {
      updateDashboard();
      document.getElementById("regionTitle").scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    // Tampilkan data sesuai filter saat pilihan diubah.
    [region, year, level].forEach(control => control.addEventListener("change", updateDashboard));
    updateDashboard();