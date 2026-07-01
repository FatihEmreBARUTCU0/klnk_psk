import { spawn, execSync } from "node:child_process";
import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const PORTS = [3000, 3001, 3002];

function killPort(port) {
  if (process.platform !== "win32") return;
  try {
    const out = execSync(
      `netstat -ano | findstr /R /C:":${port} .*LISTENING"`,
      { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }
    );
    const pids = new Set(
      out
        .split("\n")
        .map((line) => line.trim().split(/\s+/).pop())
        .filter((pid) => pid && /^\d+$/.test(pid))
    );
    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /F /T`, { stdio: "ignore" });
        console.log(`Port ${port} → PID ${pid} kapatıldı.`);
      } catch {
        /* gone */
      }
    }
  } catch {
    /* port free */
  }
}

for (const port of PORTS) killPort(port);

const cacheDirs = [".next", join("node_modules", ".cache")];
for (const dir of cacheDirs) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`${dir} temizlendi.`);
  }
}

console.log("\nDev sunucusu başlatılıyor → http://localhost:3000");
console.log("⚠ Sadece bu adresi kullan. Başka terminalde dev açma.\n");

const child = spawn("npx", ["next", "dev", "-p", "3000"], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
