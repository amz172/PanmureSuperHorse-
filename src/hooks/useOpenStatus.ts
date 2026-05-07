import { useMemo } from 'react';

interface OpenStatus {
  isOpen: boolean;
  label: string;
  nextChange: string;
}

const SESSIONS = [
  { start: 11 * 60 + 30, end: 14 * 60 },       // 11:30–14:00
  { start: 15 * 60, end: 21 * 60 + 30 },         // 15:00–21:30
];

function getNZMinutes(): { minutes: number; dayOfWeek: number } {
  const now = new Date();
  const nzString = now.toLocaleString('en-US', { timeZone: 'Pacific/Auckland' });
  const nzDate = new Date(nzString);
  const minutes = nzDate.getHours() * 60 + nzDate.getMinutes();
  const dayOfWeek = nzDate.getDay(); // 0 = Sunday
  return { minutes, dayOfWeek };
}

export function useOpenStatus(): OpenStatus {
  return useMemo(() => {
    const { minutes, dayOfWeek } = getNZMinutes();

    // Sunday closed
    if (dayOfWeek === 0) {
      return {
        isOpen: false,
        label: 'Closed Today (Sunday)',
        nextChange: 'Opens Monday 11:30 AM',
      };
    }

    // Check current sessions
    for (const session of SESSIONS) {
      if (minutes >= session.start && minutes < session.end) {
        const closeHr = Math.floor(session.end / 60);
        const closeMin = session.end % 60;
        const closeStr = closeMin === 0
          ? `${closeHr > 12 ? closeHr - 12 : closeHr}:00 ${closeHr >= 12 ? 'PM' : 'AM'}`
          : `${closeHr > 12 ? closeHr - 12 : closeHr}:${String(closeMin).padStart(2, '0')} ${closeHr >= 12 ? 'PM' : 'AM'}`;
        return {
          isOpen: true,
          label: `Open Now · Closes ${closeStr}`,
          nextChange: `Closes at ${closeStr}`,
        };
      }
    }

    // Determine next opening
    const nextSession = SESSIONS.find(s => minutes < s.start);
    if (nextSession) {
      const hr = Math.floor(nextSession.start / 60);
      const min = nextSession.start % 60;
      const timeStr = `${hr > 12 ? hr - 12 : hr}:${String(min).padStart(2, '0')} ${hr >= 12 ? 'PM' : 'AM'}`;
      return {
        isOpen: false,
        label: `Closed · Opens at ${timeStr}`,
        nextChange: `Opens at ${timeStr}`,
      };
    }

    return {
      isOpen: false,
      label: 'Closed · Opens Tomorrow 11:30 AM',
      nextChange: 'Opens Tomorrow 11:30 AM',
    };
  }, []);
}
