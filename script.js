const products = [
    // GASOLINE ENGINE OILS (Serie VENUS)
    { name: "PROXIL VENUS 0W-16 SP", sae: "0W-16", index: "170", cat: "Gasoline" },
    { name: "PROXIL VENUS 0W-20 SP", sae: "0W-20", index: "170", cat: "Gasoline" },
    { name: "PROXIL VENUS 0W-30 SP", sae: "0W-30", index: "173", cat: "Gasoline" },
    { name: "PROXIL VENUS 0W-40 SP", sae: "0W-40", index: "175", cat: "Gasoline" },
    { name: "PROXIL VENUS 5W-20 SN/CF", sae: "5W-20", index: "162", cat: "Gasoline" },
    { name: "PROXIL VENUS 5W-30 SN/CF", sae: "5W-30", index: "164", cat: "Gasoline" },
    { name: "PROXIL VENUS 5W-40 SN/CF", sae: "5W-40", index: "168", cat: "Gasoline" },
    { name: "PROXIL VENUS 10W-30 SN/CF", sae: "10W-30", index: "152", cat: "Gasoline" },
    { name: "PROXIL VENUS 10W-40 SN/CF", sae: "10W-40", index: "155", cat: "Gasoline" },
    { name: "PROXIL VENUS 10W-30 SL/CF", sae: "10W-30", index: "152", cat: "Gasoline" },
    { name: "PROXIL VENUS 10W-40 SL/CF", sae: "10W-40", index: "155", cat: "Gasoline" },
    { name: "PROXIL VENUS 15W-40 SL/CF", sae: "15W-40", index: "142", cat: "Gasoline" },
    { name: "PROXIL VENUS 20W-50 SL/CF", sae: "20W-50", index: "135", cat: "Gasoline" },
    { name: "PROXIL VENUS 20W-60 SL/CF", sae: "20W-60", index: "138", cat: "Gasoline" },
    { name: "PROXIL VENUS 25W-60 SL/CF", sae: "25W-60", index: "138", cat: "Gasoline" },

    // DIESEL ENGINE OILS (Serie URANUS)
    { name: "PROXIL URANUS 5W-40 CK-4/SN", sae: "5W-40", index: "168", cat: "Diesel" },
    { name: "PROXIL URANUS 10W-40 CK-4/SN", sae: "10W-40", index: "155", cat: "Diesel" },
    { name: "PROXIL URANUS 15W-40 CK-4/SN", sae: "15W-40", index: "142", cat: "Diesel" },
    { name: "PROXIL URANUS 10W-40 CI-4/SL", sae: "10W-40", index: "155", cat: "Diesel" },
    { name: "PROXIL URANUS 15W-40 CI-4/SL", sae: "15W-40", index: "142", cat: "Diesel" },
    { name: "PROXIL URANUS 20W-50 CH-4/SJ", sae: "20W-50", index: "135", cat: "Diesel" },
    { name: "PROXIL URANUS SAE-40 CF/SF", sae: "SAE 40", index: "115", cat: "Diesel" },
    { name: "PROXIL URANUS SAE-50 CF/SF", sae: "SAE 50", index: "118", cat: "Diesel" },
    { name: "PROXIL URANUS SAE-60 CF", sae: "SAE 60", index: "120", cat: "Diesel" },
    { name: "PROXIL URANUS SAE-70 CF", sae: "SAE 70", index: "124", cat: "Diesel" },
    { name: "PROXIL URANUS HD-50 CF/SF", sae: "HD-50", index: "98", cat: "Diesel" },

    // GEAR OILS (Serie NEPTUNE)
    { name: "PROXIL NEPTUNE 75W-80 GL-5", sae: "75W-80", index: "152", cat: "Gear" },
    { name: "PROXIL NEPTUNE 75W-90 GL-5", sae: "75W-90", index: "160", cat: "Gear" },
    { name: "PROXIL NEPTUNE 80W-90 GL-5", sae: "80W-90", index: "100", cat: "Gear" },
    { name: "PROXIL NEPTUNE 85W-90 GL-5", sae: "85W-90", index: "97", cat: "Gear" },
    { name: "PROXIL NEPTUNE 85W-140 GL-5", sae: "85W-140", index: "95", cat: "Gear" },
    { name: "PROXIL NEPTUNE SAE 90 GL-5", sae: "SAE 90", index: "98", cat: "Gear" },
    { name: "PROXIL NEPTUNE SAE 140 GL-5", sae: "SAE 140", index: "95", cat: "Gear" },

    // HYDRAULIC FLUIDS (Serie PLUTO)
    { name: "PROXIL PLUTO AW-10", sae: "ISO 10", index: "105", cat: "Hydraulic" },
    { name: "PROXIL PLUTO AW-32", sae: "ISO 32", index: "98", cat: "Hydraulic" },
    { name: "PROXIL PLUTO AW-37", sae: "ISO 37", index: "98", cat: "Hydraulic" },
    { name: "PROXIL PLUTO AW-46", sae: "ISO 46", index: "98", cat: "Hydraulic" },
    { name: "PROXIL PLUTO AW-68", sae: "ISO 68", index: "98", cat: "Hydraulic" },

    // AUTOMATIC TRANSMISSION FLUID (Serie MERCURY)
    { name: "PROXIL MERCURY CVTF", sae: "CVTF", index: "175", cat: "ATF" },
    { name: "PROXIL MERCURY DEX VI", sae: "DEX VI", index: "150", cat: "ATF" },
    { name: "PROXIL MERCURY DEX III", sae: "DEX III", index: "185", cat: "ATF" },
    { name: "PROXIL MERCURY DEX II", sae: "DEX II", index: "185", cat: "ATF" },
    { name: "PROXIL MERCURY TYPE A", sae: "Type A", index: "155", cat: "ATF" },

    // MOTORCYCLE OILS (Serie MARS)
    { name: "PROXIL MARS 4T 10W-40 SN", sae: "10W-40", index: "155", cat: "Motorcycle" },
    { name: "PROXIL MARS 4T 10W-40 SL", sae: "10W-40", index: "155", cat: "Motorcycle" },
    { name: "PROXIL MARS 4T 20W-50 SL", sae: "20W-50", index: "135", cat: "Motorcycle" },
    { name: "PROXIL MARS 2T TC/JASO FD", sae: "2T", index: "135", cat: "Motorcycle" },
    { name: "PROXIL MARS 2T TC/JASO FB", sae: "2T", index: "135", cat: "Motorcycle" },

    // COOLANTS & BRAKE FLUIDS
    { name: "PROXIL SATURN COOLANT 33%", sae: "33%", index: "N/A", cat: "Coolant" },
    { name: "PROXIL SATURN COOLANT 50%", sae: "50%", index: "N/A", cat: "Coolant" },
    { name: "PROXIL SATURN COOLANT 100%", sae: "100%", index: "N/A", cat: "Coolant" },
    { name: "PROXIL BRAKE FLUID DOT-3", sae: "DOT-3", index: "N/A", cat: "Brake" },
    { name: "PROXIL BRAKE FLUID DOT-4", sae: "DOT-4", index: "N/A", cat: "Brake" }
];

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat && document.getElementById('tableBody')) {
        filter(cat);
    } else if(document.getElementById('tableBody')) {
        renderTable(products);
    }
};

const renderTable = (items) => {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    tbody.innerHTML = items.map(p => `
        <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.sae}</td>
            <td>${p.index}</td>
            <td><button onclick="add('${p.name}')" style="background:none; border:none; color:#f30b0b; cursor:pointer; font-weight:bold; font-size: 1rem;">+ Cotizar</button></td>
        </tr>
    `).join('');
};

const filter = (query) => {
    const filtered = products.filter(p => 
        p.cat.toLowerCase().includes(query.toLowerCase()) || 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.sae.toLowerCase().includes(query.toLowerCase())
    );
    renderTable(filtered);
    if(document.getElementById('productSearch')) document.getElementById('productSearch').value = query;
};

// Lógica de Cotización
let quoteItems = [];
const add = (name) => {
    const existing = quoteItems.find(i => i.name === name);
    if (existing) existing.qty++; else quoteItems.push({ name: name, qty: 1 });
    updateQuoteUI();
};

const updateQuoteUI = () => {
    const list = document.getElementById('quoteList');
    if (!list) return;
    if (quoteItems.length === 0) { list.innerHTML = '<li>Vacio</li>'; return; }
    list.innerHTML = quoteItems.map(i => `<li>${i.name} (x${i.qty})</li>`).join('');
};

const reveal = () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
    });
};

window.addEventListener('scroll', reveal);
reveal();

if(document.getElementById('productSearch')) {
    document.getElementById('productSearch').addEventListener('input', (e) => filter(e.target.value));
}