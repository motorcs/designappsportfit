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
import { PersonalInfoScreen } from "./PersonalInfoScreen";
import { PrivacyScreen } from "./PrivacyScreen";
import { HeartZonesScreen } from "./HeartZonesScreen";
import { AlarmButtonScreen } from "./AlarmButtonScreen";
import { LegalInfoScreen } from "./LegalInfoScreen";
import { ReviewsScreen } from "./ReviewsScreen";
import { TrainerCabinetScreen } from "./TrainerCabinetScreen";
import { CorporationScreen } from "./CorporationScreen";
import { RatingScreen } from "./RatingScreen";
import { BonusHistoryScreen } from "./BonusHistoryScreen";

type Screen =
  | "studios"
  | "booking"
  | "subscription"
  | "history"
  | "stats"
  | "workout"
  | "chat"
  | "profile"
  | "personalInfo"
  | "privacy"
  | "heartZones"
  | "alarmButton"
  | "legalInfo"
  | "reviews"
  | "trainerCabinet"
  | "corporation"
  | "rating"
  | "bonusHistory";

const NO_NAV: Screen[] = [
  "booking",
  "subscription",
  "stats",
  "personalInfo",
  "privacy",
  "heartZones",
  "alarmButton",
  "legalInfo",
  "reviews",
  "trainerCabinet",
  "corporation",
  "rating",
  "bonusHistory",
];

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
          {screen === "studios" && <StudiosScreen onOpenStudio={() => setScreen("booking")} />}
          {screen === "booking" && (
            <BookingScreen
              onBack={() => setScreen("studios")}
              onContinue={() => setScreen("subscription")}
            />
          )}
          {screen === "subscription" && <SubscriptionScreen onBack={() => setScreen("booking")} />}
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
            <WorkoutScreen historyIdx={historyIdx} onBack={() => setScreen("history")} />
          )}
          {screen === "chat" && <ChatScreen />}
          {screen === "profile" && (
            <ProfileScreen
              onOpenChat={() => switchTab("chat")}
              onOpenSubscription={() => setScreen("subscription")}
              onOpenStats={() => setScreen("stats")}
              onOpenPersonalInfo={() => setScreen("personalInfo")}
              onOpenPrivacy={() => setScreen("privacy")}
              onOpenHeartZones={() => setScreen("heartZones")}
              onOpenAlarmButton={() => setScreen("alarmButton")}
              onOpenLegalInfo={() => setScreen("legalInfo")}
              onOpenReviews={() => setScreen("reviews")}
              onOpenTrainerCabinet={() => setScreen("trainerCabinet")}
              onOpenCorporation={() => setScreen("corporation")}
              onOpenRating={() => setScreen("rating")}
              onOpenBonusHistory={() => setScreen("bonusHistory")}
            />
          )}
          {screen === "personalInfo" && (
            <PersonalInfoScreen onBack={() => switchTab("profile")} />
          )}
          {screen === "privacy" && <PrivacyScreen onBack={() => switchTab("profile")} />}
          {screen === "heartZones" && <HeartZonesScreen onBack={() => switchTab("profile")} />}
          {screen === "alarmButton" && <AlarmButtonScreen onBack={() => switchTab("profile")} />}
          {screen === "legalInfo" && <LegalInfoScreen onBack={() => switchTab("profile")} />}
          {screen === "reviews" && <ReviewsScreen onBack={() => switchTab("profile")} />}
          {screen === "trainerCabinet" && (
            <TrainerCabinetScreen onBack={() => switchTab("profile")} />
          )}
          {screen === "corporation" && <CorporationScreen onBack={() => switchTab("profile")} />}
          {screen === "rating" && <RatingScreen onBack={() => switchTab("profile")} />}
          {screen === "bonusHistory" && (
            <BonusHistoryScreen onBack={() => switchTab("profile")} />
          )}
        </div>
        {showNav && <BottomNav active={tab} onChange={switchTab} />}
      </div>
    </PhoneShell>
  );
}

export default App;
