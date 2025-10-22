import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type VehicleCategory = "AUTOS" | "CAMIONETAS" | "MOTOS" | "OTROS";
export type PriceRange = "Alto" | "Medio" | "Bajo";

export interface Vehicle {
  id: string;
  category: VehicleCategory;
  priceRange: PriceRange;
  model: string;
  price: number;
  maxSpeed: number;
  tankCapacity: number;
  trunkCapacity: number | null;
}

export const vehicles: Vehicle[] = [
  { id: "1", category: "AUTOS", priceRange: "Alto", model: "LAMBORGHINI AVENTADOR", price: 2200000, maxSpeed: 197, tankCapacity: 100, trunkCapacity: 90 },
  { id: "2", category: "AUTOS", priceRange: "Alto", model: "PAGANI", price: 2000000, maxSpeed: 172, tankCapacity: 100, trunkCapacity: 125 },
  { id: "3", category: "AUTOS", priceRange: "Alto", model: "PORSCHE CARRERA GT", price: 1900000, maxSpeed: 179, tankCapacity: 80, trunkCapacity: 90 },
  { id: "4", category: "AUTOS", priceRange: "Alto", model: "AUDI R8", price: 2000000, maxSpeed: 180, tankCapacity: 98, trunkCapacity: 125 },
  { id: "5", category: "AUTOS", priceRange: "Alto", model: "LAMBORGHINI HURACAN", price: 1900000, maxSpeed: 152, tankCapacity: 80, trunkCapacity: 90 },
  { id: "6", category: "AUTOS", priceRange: "Alto", model: "CHEVROLET CORVETTE", price: 1650000, maxSpeed: 166, tankCapacity: 95, trunkCapacity: 90 },
  { id: "7", category: "AUTOS", priceRange: "Alto", model: "FERRARI SPIDER", price: 1111670, maxSpeed: 154, tankCapacity: 85, trunkCapacity: 90 },
  { id: "8", category: "AUTOS", priceRange: "Alto", model: "STAFORD", price: 888200, maxSpeed: 136, tankCapacity: 85, trunkCapacity: 90 },
  { id: "9", category: "AUTOS", priceRange: "Alto", model: "TOYOTA CAMRY", price: 811560, maxSpeed: 150, tankCapacity: 80, trunkCapacity: 90 },
  { id: "10", category: "AUTOS", priceRange: "Alto", model: "NISSAN GT", price: 625000, maxSpeed: 159, tankCapacity: 100, trunkCapacity: 90 },
  { id: "11", category: "AUTOS", priceRange: "Medio", model: "FERRARI TESTAROSA", price: 708140, maxSpeed: 170, tankCapacity: 80, trunkCapacity: 90 },
  { id: "12", category: "AUTOS", priceRange: "Medio", model: "VIPER", price: 700000, maxSpeed: 171, tankCapacity: 80, trunkCapacity: 125 },
  { id: "13", category: "AUTOS", priceRange: "Medio", model: "AUDI A7", price: 650000, maxSpeed: 146, tankCapacity: 86, trunkCapacity: 90 },
  { id: "14", category: "AUTOS", priceRange: "Medio", model: "FORD 1938", price: 600000, maxSpeed: 148, tankCapacity: 75, trunkCapacity: 90 },
  { id: "15", category: "AUTOS", priceRange: "Medio", model: "MUSTANG GT", price: 319200, maxSpeed: 150, tankCapacity: 75, trunkCapacity: 90 },
  { id: "16", category: "AUTOS", priceRange: "Medio", model: "PORSCHE 911", price: 291000, maxSpeed: 164, tankCapacity: 80, trunkCapacity: 90 },
  { id: "17", category: "AUTOS", priceRange: "Medio", model: "FERRARI 365 GTS", price: 272000, maxSpeed: 140, tankCapacity: 92, trunkCapacity: 90 },
  { id: "18", category: "AUTOS", priceRange: "Medio", model: "ASTON MARTIN", price: 260000, maxSpeed: 136, tankCapacity: 80, trunkCapacity: 90 },
  { id: "19", category: "AUTOS", priceRange: "Medio", model: "SHELBY COBRA", price: 220000, maxSpeed: 154, tankCapacity: 75, trunkCapacity: 90 },
  { id: "20", category: "AUTOS", priceRange: "Medio", model: "BMW F10", price: 206000, maxSpeed: 150, tankCapacity: 90, trunkCapacity: 90 },
  { id: "21", category: "AUTOS", priceRange: "Medio", model: "TOYOTA SUPRA", price: 200000, maxSpeed: 158, tankCapacity: 90, trunkCapacity: 90 },
  { id: "22", category: "AUTOS", priceRange: "Bajo", model: "HELLCAT", price: 178000, maxSpeed: 150, tankCapacity: 80, trunkCapacity: 90 },
  { id: "23", category: "AUTOS", priceRange: "Bajo", model: "NISSAN 350Z", price: 150000, maxSpeed: 159, tankCapacity: 80, trunkCapacity: 90 },
  { id: "24", category: "AUTOS", priceRange: "Bajo", model: "MASERATI QUATTROPORTE", price: 135000, maxSpeed: 145, tankCapacity: 85, trunkCapacity: 90 },
  { id: "25", category: "AUTOS", priceRange: "Bajo", model: "ROLLS ROYCE", price: 133600, maxSpeed: 148, tankCapacity: 84, trunkCapacity: 90 },
  { id: "26", category: "AUTOS", priceRange: "Bajo", model: "NISSAN RX8", price: 109000, maxSpeed: 150, tankCapacity: 75, trunkCapacity: null },
  { id: "27", category: "AUTOS", priceRange: "Bajo", model: "TESLA", price: 75000, maxSpeed: 131, tankCapacity: 80, trunkCapacity: 90 },
  { id: "28", category: "AUTOS", priceRange: "Bajo", model: "AUDI RS4", price: 71000, maxSpeed: 137, tankCapacity: 73, trunkCapacity: 135 },
  { id: "29", category: "AUTOS", priceRange: "Bajo", model: "NISSAN SKYLINE R32", price: 70000, maxSpeed: 140, tankCapacity: 80, trunkCapacity: 90 },
  { id: "30", category: "AUTOS", priceRange: "Bajo", model: "FORD GRAN TORINO", price: 70000, maxSpeed: 146, tankCapacity: 80, trunkCapacity: 90 },
  { id: "31", category: "AUTOS", priceRange: "Bajo", model: "VOLKSWAGEN FUSCA", price: 54500, maxSpeed: 130, tankCapacity: 95, trunkCapacity: 90 },
  { id: "32", category: "AUTOS", priceRange: "Bajo", model: "BF INJECTION", price: 52500, maxSpeed: 120, tankCapacity: 80, trunkCapacity: null },
  { id: "33", category: "AUTOS", priceRange: "Bajo", model: "CHEVROLET IMPALA 2020", price: 49560, maxSpeed: 145, tankCapacity: 80, trunkCapacity: 90 },
  { id: "34", category: "AUTOS", priceRange: "Bajo", model: "VOLKSWAGEN GOL", price: 45500, maxSpeed: 144, tankCapacity: 90, trunkCapacity: 90 },
  { id: "35", category: "AUTOS", priceRange: "Bajo", model: "TORINO DRAG", price: 41000, maxSpeed: 132, tankCapacity: 75, trunkCapacity: 90 },
  { id: "36", category: "AUTOS", priceRange: "Bajo", model: "HYUNDAI GENESIS", price: 33990, maxSpeed: 140, tankCapacity: 80, trunkCapacity: 90 },
  { id: "37", category: "AUTOS", priceRange: "Bajo", model: "SUBARU", price: 31000, maxSpeed: 142, tankCapacity: 65, trunkCapacity: 90 },
  { id: "38", category: "AUTOS", priceRange: "Bajo", model: "PONTIAC G8 2009", price: 31000, maxSpeed: 140, tankCapacity: 80, trunkCapacity: 90 },
  { id: "39", category: "AUTOS", priceRange: "Bajo", model: "TOYOTA CAMRY 2018", price: 29980, maxSpeed: 129, tankCapacity: 80, trunkCapacity: 90 },
  { id: "40", category: "AUTOS", priceRange: "Bajo", model: "MITSUBISHI LANCER GT", price: 29000, maxSpeed: 140, tankCapacity: 80, trunkCapacity: 90 },
  { id: "41", category: "AUTOS", priceRange: "Bajo", model: "WEENY ISSI", price: 28720, maxSpeed: 136, tankCapacity: 80, trunkCapacity: 90 },
  { id: "42", category: "AUTOS", priceRange: "Bajo", model: "TAXI", price: 25000, maxSpeed: 129, tankCapacity: 80, trunkCapacity: 90 },
  { id: "43", category: "AUTOS", priceRange: "Bajo", model: "MAZDA", price: 22600, maxSpeed: 132, tankCapacity: 71, trunkCapacity: 90 },
  { id: "44", category: "AUTOS", priceRange: "Bajo", model: "FLASH", price: 18620, maxSpeed: 146, tankCapacity: 97, trunkCapacity: 90 },
  { id: "45", category: "AUTOS", priceRange: "Bajo", model: "VOLKSWAGEN SCIROCCO", price: 18000, maxSpeed: 136, tankCapacity: 75, trunkCapacity: 90 },
  { id: "46", category: "AUTOS", priceRange: "Bajo", model: "FORD SIERRA", price: 17500, maxSpeed: 130, tankCapacity: 98, trunkCapacity: 90 },
  { id: "47", category: "AUTOS", priceRange: "Bajo", model: "CHEVROLET ONIX", price: 16000, maxSpeed: 154, tankCapacity: 80, trunkCapacity: 90 },
  { id: "48", category: "AUTOS", priceRange: "Bajo", model: "CLUB", price: 14500, maxSpeed: 145, tankCapacity: 80, trunkCapacity: 90 },
  { id: "49", category: "AUTOS", priceRange: "Bajo", model: "PONTIAC GTO", price: 12000, maxSpeed: 146, tankCapacity: 92, trunkCapacity: 90 },
  { id: "50", category: "AUTOS", priceRange: "Bajo", model: "TAXI 2", price: 10000, maxSpeed: 127, tankCapacity: 98, trunkCapacity: 90 },
  { id: "51", category: "AUTOS", priceRange: "Bajo", model: "CHEVROLET CAMARO 1950", price: 8920, maxSpeed: 132, tankCapacity: 80, trunkCapacity: 90 },
  { id: "52", category: "AUTOS", priceRange: "Bajo", model: "CITROEN", price: 8790, maxSpeed: 115, tankCapacity: 65, trunkCapacity: 90 },
  { id: "53", category: "AUTOS", priceRange: "Bajo", model: "TAMPA", price: 7005, maxSpeed: 136, tankCapacity: 80, trunkCapacity: 90 },
  { id: "54", category: "CAMIONETAS", priceRange: "Alto", model: "MERCEDES V9", price: 498000, maxSpeed: 140, tankCapacity: 90, trunkCapacity: null },
  { id: "55", category: "CAMIONETAS", priceRange: "Alto", model: "MERCEDES AMG", price: 455000, maxSpeed: 124, tankCapacity: 85, trunkCapacity: null },
  { id: "56", category: "CAMIONETAS", priceRange: "Medio", model: "RANGE ROVER", price: 98980, maxSpeed: 132, tankCapacity: 75, trunkCapacity: null },
  { id: "57", category: "CAMIONETAS", priceRange: "Medio", model: "DODGE RAM", price: 84000, maxSpeed: 140, tankCapacity: 85, trunkCapacity: null },
  { id: "58", category: "CAMIONETAS", priceRange: "Medio", model: "FORD EXPLORER", price: 78000, maxSpeed: 140, tankCapacity: 97, trunkCapacity: null },
  { id: "59", category: "CAMIONETAS", priceRange: "Medio", model: "JEEP CHEROKEE", price: 69000, maxSpeed: 118, tankCapacity: 71, trunkCapacity: null },
  { id: "60", category: "CAMIONETAS", priceRange: "Medio", model: "CADILLAC", price: 60000, maxSpeed: 124, tankCapacity: 69, trunkCapacity: null },
  { id: "61", category: "CAMIONETAS", priceRange: "Bajo", model: "CHEVROLET SILVERADO", price: 60000, maxSpeed: 124, tankCapacity: 80, trunkCapacity: null },
  { id: "62", category: "CAMIONETAS", priceRange: "Bajo", model: "CADILLAC XT6", price: 55000, maxSpeed: 124, tankCapacity: 80, trunkCapacity: null },
  { id: "63", category: "CAMIONETAS", priceRange: "Bajo", model: "FORD RAPTOR", price: 48000, maxSpeed: 128, tankCapacity: 80, trunkCapacity: null },
  { id: "64", category: "CAMIONETAS", priceRange: "Bajo", model: "TOYOTA HILUX", price: 40000, maxSpeed: 124, tankCapacity: 80, trunkCapacity: null },
  { id: "65", category: "CAMIONETAS", priceRange: "Bajo", model: "FIAT TORO", price: 33500, maxSpeed: 134, tankCapacity: 63, trunkCapacity: null },
  { id: "66", category: "CAMIONETAS", priceRange: "Bajo", model: "FORD TOURNEO", price: 22500, maxSpeed: 98, tankCapacity: 100, trunkCapacity: 140 },
  { id: "67", category: "CAMIONETAS", priceRange: "Bajo", model: "RUMPO", price: 14400, maxSpeed: 121, tankCapacity: 85, trunkCapacity: 140 },
  { id: "68", category: "CAMIONETAS", priceRange: "Bajo", model: "COMBI", price: 9600, maxSpeed: 102, tankCapacity: 80, trunkCapacity: null },
  { id: "69", category: "CAMIONETAS", priceRange: "Bajo", model: "SADLER", price: 7000, maxSpeed: 134, tankCapacity: 74, trunkCapacity: null },
  { id: "70", category: "CAMIONETAS", priceRange: "Bajo", model: "CAMPER", price: 7000, maxSpeed: 109, tankCapacity: 90, trunkCapacity: null },
  { id: "71", category: "MOTOS", priceRange: "Alto", model: "SUZUKI GSX", price: 270000, maxSpeed: 163, tankCapacity: 80, trunkCapacity: null },
  { id: "72", category: "MOTOS", priceRange: "Alto", model: "DUCATI", price: 269000, maxSpeed: 152, tankCapacity: 80, trunkCapacity: null },
  { id: "73", category: "MOTOS", priceRange: "Medio", model: "APRILIA RSV-4", price: 137000, maxSpeed: 155, tankCapacity: 69, trunkCapacity: null },
  { id: "74", category: "MOTOS", priceRange: "Medio", model: "PCJ-600", price: 80000, maxSpeed: 147, tankCapacity: 90, trunkCapacity: null },
  { id: "75", category: "MOTOS", priceRange: "Bajo", model: "FREEWAY", price: 46750, maxSpeed: 128, tankCapacity: 90, trunkCapacity: null },
  { id: "76", category: "MOTOS", priceRange: "Bajo", model: "BAGGER", price: 40000, maxSpeed: 128, tankCapacity: 69, trunkCapacity: null },
  { id: "77", category: "MOTOS", priceRange: "Bajo", model: "HONDA XRE", price: 25000, maxSpeed: 132, tankCapacity: 90, trunkCapacity: null },
  { id: "78", category: "MOTOS", priceRange: "Bajo", model: "MOTO TAXI", price: 5000, maxSpeed: 132, tankCapacity: 72, trunkCapacity: null },
  { id: "79", category: "MOTOS", priceRange: "Bajo", model: "FAGGIO", price: 3500, maxSpeed: 102, tankCapacity: 90, trunkCapacity: null },
  { id: "80", category: "MOTOS", priceRange: "Alto", model: "BRICKADE", price: 285500, maxSpeed: 98, tankCapacity: 100, trunkCapacity: null },
  { id: "81", category: "OTROS", priceRange: "Alto", model: "VOLVO FH12", price: 200000, maxSpeed: 97, tankCapacity: 110, trunkCapacity: null },
  { id: "82", category: "OTROS", priceRange: "Medio", model: "MARCOPOLO", price: 150000, maxSpeed: 140, tankCapacity: 100, trunkCapacity: null },
  { id: "83", category: "OTROS", priceRange: "Medio", model: "BUS", price: 85500, maxSpeed: 116, tankCapacity: 100, trunkCapacity: null },
  { id: "84", category: "OTROS", priceRange: "Bajo", model: "COASTER HYUNDAI", price: 56000, maxSpeed: 92, tankCapacity: 100, trunkCapacity: null },
  { id: "85", category: "OTROS", priceRange: "Bajo", model: "BOXVILLE", price: 30000, maxSpeed: 98, tankCapacity: 85, trunkCapacity: null },
  { id: "86", category: "AUTOS", priceRange: "Medio", model: "ALFA ROMEO", price: 245000, maxSpeed: 150, tankCapacity: 80, trunkCapacity: 90 },
];
