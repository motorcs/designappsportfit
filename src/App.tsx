import { useState } from "react";
import { PhoneShell } from "./PhoneShell";
import { BottomNav, type Tab } from "./BottomNav";
import { HomeScreen } from "./HomeScreen";
import { BookingScreen } from "./BookingScreen";
import { SubscriptionScreen } from "./SubscriptionScreen";
import { StudiosScreen } from "./StudiosScreen";

type Screen = "home" | "studios" | "booking" | "subscription";

function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [screen, setScreen] = useState<Screen>("home");

  const showNav = screen === "home" || screen === "studios";

  return (
    <PhoneShell>
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col min-h-0">
          {screen === "home" && (
            <HomeScreen
              onOpenBooking={() => setScreen("studios")}
              onOpenSubscription={() => setScreen("subscription")}
            />
          )}
          {screen === "studios" && (
            <StudiosScreen onOpenStudio={() => setScreen("booking")} />
          )}
          {screen === "booking" && (
            <BookingScreen
              onBack={() => setScreen("studios")}
              onContinue={() => setScreen("subscription")}
            />
          )}
          {screen === "subscription" && (
            <SubscriptionScreen onBack={() => setScreen("booking")} />
          )}
        </div>
        {showNav && (
          <BottomNav
            active={tab}
            onChange={(t) => {
              setTab(t);
              setScreen("home");
            }}
          />
        )}
      </div>
    </PhoneShell>
  );
}

export default App;
