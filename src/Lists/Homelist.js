// **Manufacturing Machines**
import psm from "../assets/LISTimg/Double-Planetary-Mixer.jpg";
import mixingVessel from "../assets/LISTimg/mixingtankvessel.avif";
import viscousFiller from "../assets/LISTimg/viscous-liquid-machine-4.webp";
import shampooMixer from "../assets/LISTimg/shampoo-mixer-machine34044445355.webp";

// **Filling & Packaging Machines**
 import ointmentFiller from "../assets/LISTimg/oinment.jpeg";
import milkFillingMachine from "../assets/LISTimg/milkfillingmachine.jpg";
import tubeFiller from "../assets/LISTimg/tubefiller.jpg";
import foilFiller from "../assets/LISTimg/Aluminum-Foil-Filler-Sealer.avif";
import wadInserter from "../assets/LISTimg/wad-inserting.jpg";
 import inductionSealer from "../assets/LISTimg/automaticinductionfoil.webp";
import roundLabeler from "../assets/LISTimg/round-bottle-labelling-machine-with-coding-500x500.webp";
import doubleLabeler from "../assets/LISTimg/rounndlabelingmachine.webp";
 import topLabeler from "../assets/LISTimg/Automatic-Top-Side-Sticker-Labeling-Machine.jpg";
import shrinkSleeve from "../assets/LISTimg/shrinksleeve.jpeg";
 import shrinkWrap from "../assets/LISTimg/shrinkwraper.jpeg";
import flowWrap from "../assets/LISTimg/flowwrapper.jpeg";
import autoCoater from '../assets/LISTimg/autocoater-tablet-machine-500x500.webp';
// **Pharmaceutical Equipment**
 import planetary from "../assets/LISTimg/sparkler-filter-press.jpg";
import vacuum from "../assets/LISTimg/Fzg-48-Rectangular-Type-Low-Temperature-Vacuum-Drying-Machine.avif";
 import lotion from "../assets/LISTimg/vibro.webp";
 import rapidMixerGranulator from "../assets/LISTimg/rapidmixergranulator.jpeg";
 import fluidBedDryer from "../assets/LISTimg/fliudbeddryer.jpeg";
 import liquidOralPlant from "../assets/LISTimg/ioralliqiud.jpeg";
import ointmentPlant from "../assets/LISTimg/oinment.jpeg";
import trayDryer from "../assets/LISTimg/traydryer.png";
import vacuumTrayDryer from "../assets/LISTimg/vacuumtraydryer.webp";

// **Blending & Milling Machines**
import veeclone from "../assets/LISTimg/Vee-Cone-Blender_lg.png";
import octagonalBlender from "../assets/LISTimg/octagonal-blender.jpg";
import multimill from "../assets/LISTimg/multi-mill-machine.jpg"
 import coMill from "../assets/LISTimg/comill.webp";
 import starchKettle from "../assets/LISTimg/starchkettle.jpeg";

// **Chemical Industrial Machines**
import nutscheFilter from "../assets/LISTimg/nutshe.png";
 import rotoconeVacuum from "../assets/LISTimg/roto-cone-vacuum-dryer.png";
import centrifuge from "../assets/LISTimg/laboratory-centrifuge-machine.jpg";
import pressureNutsche from "../assets/LISTimg/pressure-nutsche-filter.jpg";


export const chemicalIndustrialMachines = [
	{
		id: 1,
		pic: planetary,
		Name: "Filter Press",
		details:
			"Filter Press high-efficiency solid-liquid separation | industrial filtration systems",
		Description:
			"A high-performance filtration system designed for efficient separation of solids from liquids or gases. It is widely used in chemical, pharmaceutical, and wastewater treatment industries for impurity removal, sludge dewatering, and clarification processes. The filter press ensures high filtration efficiency, low moisture content in filter cakes, and easy operation.",
		Specifications:
			"Filtration Area: 1-1000 sq.m | Pressure: 7-15 bar | Material: PP/SS 304/316 | Plate Size: 500-2000mm | Automation: Manual/Semi-Automatic/Fully Automatic",
	},
{
	id: 2,
	pic: veeclone,
	Name: "V-Cone Blender",
	details: "High-efficiency V-Cone Blender for uniform mixing of powders and granules | Industrial powder blending equipment",
	Description:
		"The V-Cone Blender is an industrial mixing machine designed for homogeneous blending of powders, granules, and dry materials. It operates on the principle of diffusion mixing, ensuring a consistent blend without product degradation. Widely used in the pharmaceutical, food, chemical, and cosmetic industries, it offers a gentle yet thorough mixing process. The V-Cone Blender features a durable stainless steel construction, easy-clean surfaces, and customizable configurations to meet various production needs.",
	Specifications:
		"Capacity: 50–5000L | Motor Power: 1–15 HP | Material: Stainless Steel (SS 304/316) | Speed: 10–60 RPM | Mixing Time: 5–30 minutes | Discharge: Butterfly or Slide Valve | Optional Features: PLC Control, Vacuum Loading, and Safety Guard",
}
,
	{
		id: 3,
		pic: multimill,
		Name: "Multimill",
		details:
			"Multimill granulation & size reduction system | pharmaceutical milling equipment",
		Description:
			"A versatile milling machine designed for granulation, size reduction, and mixing of materials. It is widely used in the pharmaceutical and chemical industries for achieving uniform particle size distribution. The multimill features interchangeable screens, high-speed rotating blades, and a compact design for efficient processing of powders, granules, and wet masses.",
		Specifications:
			"Capacity: 10-500 kg/h | Motor Power: 2-20 HP | Screen Size: 0.5-10mm | Material: SS 304/316 | Blade Speed: 1500-3000 RPM",
	},
	{
		id: 4,
		pic: coMill,
		Name: "Co-Mill",
		details:
			"Co-Mill precision particle size reduction | heat-sensitive material processing systems",
		Description:
			"A high-performance milling machine specifically designed for uniform particle size reduction and de-agglomeration. It is ideal for processing heat-sensitive and hard-to-mill materials in the pharmaceutical, chemical, and food industries. The co-mill ensures precise control over particle size distribution, high throughput, and minimal heat generation during the milling process.",
		Specifications:
			"Capacity: 50-1000 kg/h | Motor Power: 5-30 HP | Particle Size: 50-500 microns | Material: SS 304/316 | Milling Mechanism: Impact/Shear",
	},
];
export const manufacturingMachines = [
	{
		id: 1,
		pic: psm,
		Name: "Planetary Mixer",
		details:
			"Planetary Mixer heavy-duty blending for viscous & semi-solid materials | industrial mixing technology",
		Description:
			"A heavy-duty mixer with planetary motion that ensures thorough and uniform blending of materials. Ideal for industries like pharmaceuticals, cosmetics, and food, it is designed to handle viscous and semi-solid materials with ease. The mixer features a robust construction, easy-to-clean surfaces, and customizable speed settings for precise control over the mixing process.",
		Specifications:
			"Capacity: 10-1000L | Motor Power: 1-15 HP | Material: Stainless Steel 304/316 | Speed: 20-60 RPM | Mixing Time: 5-30 minutes",
	},
	{
		id: 2,
		pic: mixingVessel,
		Name: "Mixing Vessel",
		details:
			"Mixing Vessel versatile tank with heating/cooling jacket | liquid & semi-solid processing systems",
		Description:
			"A robust and versatile tank designed for efficient mixing and processing of liquids, semi-solids, and slurries. It is widely used in industries like pharmaceuticals, chemicals, and food processing. The vessel features a heating/cooling jacket, an agitator for uniform mixing, and a durable stainless steel construction for long-lasting performance.",
		Specifications:
			"Capacity: 50-5000L | Heating/Cooling Jacket: Optional | Material: Stainless Steel | Agitator Type: Anchor/Paddle | Power: 1-10 HP",
	},
	{
		id: 3,
		pic: viscousFiller,
		Name: "Viscous Filler",
		details:
			"Viscous Filler servo PLC-based filling for thick liquids | high-precision packaging machinery",
		Description:
			"A servo PLC-based filling machine designed for handling thick and viscous liquids with high precision. It is ideal for industries like cosmetics, pharmaceuticals, and food, where accurate filling and minimal wastage are critical. The machine features a user-friendly interface, easy-to-clean components, and customizable filling parameters.",
		Specifications:
			"Filling Range: 10-1000ml | Accuracy: ±0.5% | Speed: 20-60 bottles/min | Material: SS 304/316 | Power: 1-3 HP",
	},
	{
		id: 4,
		pic: tubeFiller,
		Name: "Tube Filler",
		details:
			"Tube Filler automated tube filling & sealing for creams & gels | cosmetic packaging systems",
		Description:
			"An automated system for filling and sealing tubes with precision and efficiency. It is widely used in the cosmetics, pharmaceutical, and chemical industries for packaging creams, gels, and ointments. The machine features a compact design, easy operation, and customizable filling options to suit various product requirements.",
		Specifications:
			"Filling Range: 10-500ml | Speed: 30-80 tubes/min | Material: SS 304 | Sealing Type: Hot Air/Crimp | Power: 1-2 HP",
	},
	{
		id: 5,
		pic: foilFiller,
		Name: "Foil Filler",
		details:
			"Foil Filler vertical filling/sealing for airtight packaging | powder & liquid packaging equipment",
		Description:
			"A vertical filling and sealing machine designed for precision packaging of liquids, powders, and granules. It is ideal for industries like food, pharmaceuticals, and chemicals, where airtight sealing and accurate filling are essential. The machine features a compact design, easy-to-clean components, and customizable sealing options.",
		Specifications:
			"Filling Range: 10-500ml | Speed: 40-100 packs/min | Material: SS 304 | Sealing Type: Induction/Heat | Power: 1-3 HP",
	},
	{
		id: 6,
		pic: wadInserter,
		Name: "Automatic Wad Inserting Machine",
		details:
			"Automatic Wad Inserter high-speed cap sealing for pharmaceuticals | bottle packaging automation",
		Description:
			"An automatic machine designed for inserting sealing wads into bottle caps to ensure product integrity. It is widely used in the pharmaceutical and food industries for packaging liquids and powders. The machine features high-speed operation, precise alignment, and easy maintenance.",
		Specifications:
			"Speed: 60-120 caps/min | Material: SS 304 | Cap Size: 18-53mm | Power: 1-2 HP | Automation: Fully Automatic",
	},
	{
		id: 7,
		pic: inductionSealer,
		Name: "Automatic Induction Foil Sealer",
		details:
			"Induction Foil Sealer tamper-proof container sealing | pharmaceutical packaging technology",
		Description:
			"A sealing machine that uses induction heating to securely seal foil onto containers. It is ideal for industries like pharmaceuticals, food, and cosmetics, where tamper-proof sealing is required. The machine features adjustable sealing parameters, high-speed operation, and energy-efficient performance.",
		Specifications:
			"Sealing Diameter: 10-120mm | Speed: 20-60 containers/min | Power: 2-5 kW | Material: SS 304 | Sealing Time: 1-5 seconds",
	},
	{
		id: 8,
		pic: roundLabeler,
		Name: "Automatic Round Bottle Self-Adhesive Sticker Labeler",
		details:
			"Round Bottle Labeler self-adhesive labeling for pharmaceuticals | high-speed packaging machinery",
		Description:
			"A self-adhesive labeling machine designed for applying labels to round bottles with precision and efficiency. It is widely used in the pharmaceutical, food, and beverage industries. The machine features a user-friendly interface, adjustable label placement, and high-speed operation.",
		Specifications:
			"Labeling Speed: 60-120 bottles/min | Label Size: 20-150mm | Material: SS 304 | Power: 0.5-1.5 HP | Label Accuracy: ±0.5mm",
	},
	{
		id: 9,
		pic: doubleLabeler,
		Name: "Automatic Double Sticker Labeler",
		details:
			"Double Sticker Labeler front/back labeling system | cosmetic & pharmaceutical packaging",
		Description:
			"A labeling machine designed for applying stickers on both the front and back of products. It is ideal for industries like pharmaceuticals, cosmetics, and food, where dual-sided labeling is required. The machine features high-speed operation, precise label placement, and easy maintenance.",
		Specifications:
			"Labeling Speed: 50-100 bottles/min | Label Size: 20-150mm | Material: SS 304 | Power: 0.75-2 HP | Label Accuracy: ±0.5mm",
	},
	{
		id: 10,
		pic: topLabeler,
		Name: "Automatic Top Side Sticker Labeler",
		details:
			"Top Side Labeler precision sticker application for packs | automated packaging equipment",
		Description:
			"A labeling machine designed for applying stickers on the top surface of products. It is widely used in the pharmaceutical, food, and cosmetic industries. The machine features high-speed operation, precise label placement, and customizable labeling options.",
		Specifications:
			"Labeling Speed: 40-80 packs/min | Label Size: 20-100mm | Material: SS 304 | Power: 0.5-1.5 HP | Label Accuracy: ±0.5mm",
	},
	{
		id: 11,
		pic: shrinkSleeve,
		Name: "Shrink Sleeve",
		details:
			"Shrink Sleeve label applicator with heating tunnel | tamper-proof packaging systems",
		Description:
			"A label applicator with a heating tunnel for secure sleeve shrinking. It is widely used in the beverage, pharmaceutical, and cosmetic industries for tamper-proof packaging. The machine features adjustable heating settings, high-speed operation, and easy maintenance.",
		Specifications:
			"Speed: 20-60 bottles/min | Heating Power: 3-6 kW | Material: SS 304 | Sleeve Size: 20-150mm | Shrink Time: 2-10 seconds",
	},
	{
		id: 12,
		pic: shrinkWrap,
		Name: "Shrink Wrapper",
		details:
			"Shrink Wrapper film wrapping for product protection | industrial packaging machinery",
		Description:
			"A machine for securely wrapping products with shrink film for protection and tamper-proof packaging. It is ideal for industries like food, pharmaceuticals, and cosmetics. The machine features adjustable film tension, high-speed operation, and energy-efficient performance.",
		Specifications:
			"Speed: 10-50 packs/min | Film Width: 200-500mm | Power: 2-5 kW | Material: SS 304 | Shrink Time: 5-15 seconds",
	},
	{
		id: 13,
		pic: flowWrap,
		Name: "Flow Wrapper",
		details:
			"Flow Wrapper horizontal packaging for food & cosmetics | high-speed wrapping technology",
		Description:
			"A horizontal wrapping machine designed for high-speed packaging of products. It is widely used in the food, pharmaceutical, and cosmetic industries. The machine features adjustable wrapping parameters, easy operation, and high-speed performance.",
		Specifications:
			"Speed: 50-200 packs/min | Film Width: 200-600mm | Power: 3-7 kW | Material: SS 304 | Wrapping Accuracy: ±0.5mm",
	},
	{
		id: 14,
		pic: autoCoater,
		Name: "Auto Coater",
		details:
			"Auto Coater tablet/capsule coating system | pharmaceutical production equipment",
		Description:
			"A high-efficiency coating and counting machine designed for tablets, capsules, and other products. It is widely used in the pharmaceutical industry for applying uniform coatings. The machine features precise coating control, high throughput, and easy maintenance.",
		Specifications:
			"Capacity: 50-500 kg/h | Coating Pan Diameter: 600-1200mm | Power: 2-7.5 HP | Material: SS 304 | Coating Time: 1-4 hours",
	},
	{
		id: 15,
		pic: starchKettle,
		Name: "Starch Kettle",
		details:
			"Starch Kettle specialized paste preparation | pharmaceutical & food processing systems",
		Description:
			"A specialized kettle designed for preparing starch paste, widely used in the pharmaceutical and food industries. The kettle features a heating jacket, an agitator for uniform mixing, and a durable stainless steel construction.",
		Specifications:
			"Capacity: 50-1000L | Heating Type: Steam/Electric | Material: SS 304 | Agitator Speed: 20-60 RPM | Power: 1-5 HP",
	},
	{
		id: 16,
		pic: rapidMixerGranulator,
		Name: "Rapid Mixer Granulator",
		details:
			"Rapid Mixer Granulator high-speed wet granulation | tablet production machinery",
		Description:
			"A high-speed granulation machine designed for efficient mixing and wet granulation in pharmaceutical production. It is widely used for preparing granules for tablet compression. The machine features a robust design, easy operation, and high throughput.",
		Specifications:
			"Capacity: 10-1000L | Motor Power: 2-20 HP | Material: SS 304/316 | Speed: 50-500 RPM | Granulation Time: 5-30 minutes",
	},
	{
		id: 17,
		pic: fluidBedDryer,
		Name: "Fluid Bed Dryer",
		details:
			"Fluid Bed Dryer fluidization technology for granules | pharmaceutical drying systems",
		Description:
			"An advanced drying system using fluidization technology for efficient moisture removal in granules and powders. It is widely used in the pharmaceutical and chemical industries. The dryer features precise temperature control, high throughput, and easy operation.",
		Specifications:
			"Capacity: 5-500 kg/batch | Airflow: 1000-5000 CFM | Power: 3-15 kW | Material: SS 304 | Drying Time: 1-4 hours",
	},
	{
		id: 18,
		pic: liquidOralPlant,
		Name: "Liquid Oral Plant",
		details:
			"Liquid Oral Plant syrup & suspension production | pharmaceutical processing systems",
		Description:
			"A complete processing system for manufacturing liquid oral formulations with high precision and hygiene standards. It is widely used in the pharmaceutical industry for producing syrups, suspensions, and oral solutions. The plant features automated controls, easy cleaning, and high throughput.",
		Specifications:
			"Capacity: 100-5000L | Material: SS 304/316 | Automation: PLC Controlled | Power: 5-20 HP | Processing Time: 2-8 hours",
	},
	{
		id: 19,
		pic: ointmentPlant,
		Name: "Ointment Plant",
		details:
			"Ointment Plant cream & ointment production system | pharmaceutical manufacturing equipment",
		Description:
			"A complete system for the efficient production of ointments and creams, ensuring consistent quality and hygiene. It is widely used in the pharmaceutical and cosmetic industries. The plant features a robust design, easy operation, and high throughput.",
		Specifications:
			"Capacity: 50-2000L | Heating Type: Steam/Electric | Material: SS 304/316 | Power: 3-15 HP | Processing Time: 2-6 hours",
	},
	{
		id: 20,
		pic: shampooMixer,
		Name: "Shampoo Mixer",
		details:
			"Shampoo Mixer liquid blending for cosmetics | personal care production machinery",
		Description:
			"A specialized mixer designed for the blending of shampoo and other liquid products. It is widely used in the cosmetic and personal care industries. The mixer features a robust design, easy cleaning, and high mixing efficiency.",
		Specifications:
			"Capacity: 100-2000L | Motor Power: 2-10 HP | Material: SS 304 | Speed: 30-100 RPM | Mixing Time: 10-30 minutes",
	},
	{
		id: 21,
		pic: milkFillingMachine,
		Name: "Milk Filling",
		details:
			"Milk Filling automated dairy packaging | food & beverage machinery",
		Description:
			"An automated filling machine specifically designed for packaging milk and dairy products. It is widely used in the food and beverage industry. The machine features high-speed operation, easy cleaning, and precise filling control.",
		Specifications:
			"Filling Range: 100-1000ml | Speed: 40-120 bottles/min | Material: SS 304 | Power: 2-5 HP | Accuracy: ±0.5%",
	},
];
export const pharmaceuticalEquipments = [
	{
		id: 1,
		pic: vacuum,
		Name: "Vacuum Dryer",
		details:
			"Vacuum Dryer precision drying for heat-sensitive powders & granules | vacuum drying technology",
		Description:
			"A precision drying solution that uses vacuum technology to remove moisture from heat-sensitive materials. It is widely used in the pharmaceutical and chemical industries for drying powders, granules, and crystals. The dryer ensures gentle and uniform drying, preserving the quality and integrity of the materials.",
		Specifications:
			"Capacity: 10-500L | Vacuum Pressure: 0.1-0.5 bar | Heating Type: Steam/Electric | Material: SS 304/316 | Power: 2-10 HP",
	},
	{
		id: 2,
		pic: lotion,
		Name: "Vibro Shifter",
	details:
			"Vibro Shifter high-efficiency sieving for powders & liquids | vibratory separation machinery",
		Description:
			"A high-efficiency sieving machine designed for the precise separation of powders, granules, and liquids. It is widely used in the pharmaceutical, food, and chemical industries for grading, sizing, and de-lumping materials. The shifter features a compact design, easy-to-clean screens, and minimal noise operation.",
		Specifications:
			"Screen Size: 20-200 mesh | Capacity: 50-500 kg/h | Power: 0.5-2 HP | Material: SS 304 | Vibration Frequency: 1500-3000 RPM",
	},
	{
		id: 3,
		pic: trayDryer,
		Name: "Tray Dryer",
	details:
			"Tray Dryer multi-tray system for granules & herbal products | industrial drying equipment",
		Description:
			"A drying system that utilizes multiple trays for uniform drying of materials. It is commonly used in the pharmaceutical and food industries for drying granules, powders, and herbal products. The dryer features a robust construction, easy loading/unloading, and precise temperature control for consistent results.",
		Specifications:
			"Capacity: 10-100 trays | Heating Type: Steam/Electric | Material: SS 304 | Power: 2-10 HP | Drying Time: 1-8 hours",
	},
	{
		id: 4,
		pic: nutscheFilter,
		Name: "Agitated Nutsche Filter Dryer",
		details:
			"Agitated Nutsche Filter Dryer integrated filtration-washing-drying unit | pharmaceutical processing systems",
		Description:
			"An advanced filtration and drying system that combines filtration, washing, and drying processes in one compact unit. It is widely used in the pharmaceutical and chemical industries for processing heat-sensitive materials. The dryer features a robust design, easy operation, and high efficiency.",
		Specifications:
			"Capacity: 50-2000L | Pressure Rating: 0-6 bar | Material: SS 304/316 | Power: 3-15 HP | Drying Time: 2-8 hours",
	},
	{
		id: 5,
		pic: rotoconeVacuum,
		Name: "Rotocone Vacuum Dryer",
		details:
			"Rotocone Vacuum Dryer rotating vacuum technology for gentle drying | heat-sensitive material systems",
		Description:
			"A vacuum dryer designed for gentle drying of heat-sensitive materials, combining rotating and vacuum pressure for optimal drying. It is widely used in the pharmaceutical and chemical industries. The dryer features a robust design, easy operation, and high efficiency.",
		Specifications:
			"Capacity: 50-1000L | Vacuum Pressure: 0.1-0.5 bar | Heating Type: Steam/Electric | Material: SS 304/316 | Power: 3-15 HP",
	},
	{
		id: 6,
		pic: centrifuge,
		Name: "Centrifuge",
		details:
			"Centrifuge high-speed separation for pharmaceutical slurries | solid-liquid processing equipment",
		Description:
			"A high-speed separation machine used for the efficient separation of liquids and solids. It is widely used in the pharmaceutical and chemical industries for processing suspensions and slurries. The centrifuge features a robust design, easy operation, and high throughput.",
		Specifications:
			"Capacity: 10-500L | Speed: 1000-5000 RPM | Power: 2-15 HP | Material: SS 304/316 | Separation Efficiency: 95-99%",
	},
	{
		id: 7,
		pic: pressureNutsche,
		Name: "Pressure Nutsche Filter",
	details:
			"Pressure Nutsche Filter high-pressure solid-liquid separation | industrial filtration technology",
		Description:
			"A filtration system designed to handle high-pressure processes, ideal for solid-liquid separation in various industries. It is widely used in the pharmaceutical and chemical industries. The filter features a robust design, easy operation, and high efficiency.",
		Specifications:
			"Capacity: 50-2000L | Pressure Rating: 0-10 bar | Material: SS 304/316 | Power: 3-20 HP | Filtration Efficiency: 95-99%",
	},
	{
		id: 8,
		pic: octagonalBlender,
		Name: "Octagonal Blender",
		details:
			"Octagonal Blender uniform mixing for powders & granules | pharmaceutical blending machinery",
		Description:
			"A blending machine with an octagonal shape for uniform mixing of materials. It is widely used in the pharmaceutical and food industries. The blender features a robust design, easy cleaning, and high mixing efficiency.",
		Specifications:
			"Capacity: 50-2000L | Motor Power: 1-10 HP | Material: SS 304 | Speed: 10-30 RPM | Mixing Time: 5-30 minutes",
	},
	{
		id: 9,
		pic: vacuumTrayDryer,
		Name: "Vacuum Tray Dryer",
	details:
			"Vacuum Tray Dryer low-temperature moisture removal | vacuum-assisted drying systems",
		Description:
			"A drying system utilizing vacuum pressure to remove moisture from materials. It is widely used in the pharmaceutical and chemical industries. The dryer features a robust design, easy operation, and high efficiency.",
		Specifications:
			"Capacity: 10-100 trays | Vacuum Pressure: 0.1-0.5 bar | Heating Type: Steam/Electric | Material: SS 304 | Power: 2-10 HP",
	},
];