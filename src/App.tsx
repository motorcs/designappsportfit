import { useState } from "react";
import { PhoneShell } from "./PhoneShell";
import { BottomNav, type Tab } from "./BottomNav";
import { HomeScreen } from "./HomeScreen";
import { BookingScreen } from "./BookingScreen";
import { SubscriptionScreen } from "./SubscriptionScreen";

type Screen = "home" | "booking" | "subscription";

function App() {
  const [tab, setTab] = useState<Tab>("home");
  const [screen, setScreen] = useState<Screen>("home");

  const showNav = screen === "home";

  return (
    <PhoneShell>
      <div className="min-h-full flex flex-col">
        <div className="flex-1">
          {screen === "home" && (
            <HomeScreen
              onOpenBooking={() => setScreen("booking")}
              onOpenSubscription={() => setScreen("subscription")}
            />
          )}
          {screen === "booking" && (
            <BookingScreen
              onBack={() => setScreen("home")}
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
