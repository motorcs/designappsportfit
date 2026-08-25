import { useState } from "react";
import { PhoneShell } from "./PhoneShell";
import { BottomNav, type Tab } from "./BottomNav";
import { StudiosScreen } from "./StudiosScreen";
import { BookingScreen } from "./BookingScreen";
import { SubscriptionScreen } from "./SubscriptionScreen";
import { HistoryScreen } from "./HistoryScreen";
import { StatsScreen } from "./StatsScreen";
import { WorkoutScreen } from "./WorkoutScreen";
import { ChatScreen } from "./ChatScreen";
import { ProfileScreen } from "./ProfileScreen";

type Screen =
  | "studios"
  | "booking"
  | "subscription"
  | "history"
  | "stats"
  | "workout"
  | "chat"
  | "profile";

const NO_NAV: Screen[] = ["booking", "subscription", "stats"];

function App() {
  const [tab, setTab] = useState<Tab>("studios");
  const [screen, setScreen] = useState<Screen>("studios");
  const [historyIdx, setHistoryIdx] = useState(0);

  const showNav = !NO_NAV.includes(screen);

  const switchTab = (t: Tab) => {
    setTab(t);
    setScreen(t);
  };

  return (
    <PhoneShell>
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col min-h-0 screen">
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
          {screen === "history" && (
            <HistoryScreen
              onOpenStats={() => setScreen("stats")}
              onOpenWorkout={(idx) => {
                setHistoryIdx(idx);
                setScreen("workout");
              }}
            />
          )}
          {screen === "stats" && <StatsScreen onBack={() => setScreen("history")} />}
          {screen === "workout" && (
            <WorkoutScreen
              historyIdx={historyIdx}
              onBack={() => setScreen("history")}
              onHome={() => switchTab("studios")}
            />
          )}
          {screen === "chat" && <ChatScreen />}
          {screen === "profile" && (
            <ProfileScreen
              onOpenChat={() => switchTab("chat")}
              onOpenSubscription={() => setScreen("subscription")}
              onOpenStats={() => setScreen("stats")}
            />
          )}
        </div>
        {showNav && <BottomNav active={tab} onChange={switchTab} />}
      </div>
    </PhoneShell>
  );
}

export default App;
