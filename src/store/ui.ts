import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UIState {
  // Announcement bar
  isAnnouncementDismissed: boolean;
  dismissAnnouncement: () => void;
  
  // Theme and preferences
  reducedMotion: boolean;
  setReducedMotion: (enabled: boolean) => void;
  
  // Loading states
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  
  // Mobile menu
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  
  // Pipeline carousel
  pipelineStep: number;
  setPipelineStep: (step: number) => void;
  isPipelinePlaying: boolean;
  setPipelinePlaying: (playing: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      // Announcement bar
      isAnnouncementDismissed: false,
      dismissAnnouncement: () => set({ isAnnouncementDismissed: true }),
      
      // Theme and preferences
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      setReducedMotion: (enabled: boolean) => set({ reducedMotion: enabled }),
      
      // Loading states
      isLoading: false,
      setLoading: (loading: boolean) => set({ isLoading: loading }),
      
      // Mobile menu
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open: boolean) => set({ isMobileMenuOpen: open }),
      
      // Pipeline carousel
      pipelineStep: 0,
      setPipelineStep: (step: number) => set({ pipelineStep: step }),
      isPipelinePlaying: true,
      setPipelinePlaying: (playing: boolean) => set({ isPipelinePlaying: playing }),
    }),
    {
      name: 'parscade-ui-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isAnnouncementDismissed: state.isAnnouncementDismissed,
        reducedMotion: state.reducedMotion,
      }),
    }
  )
);

// Initialize reduced motion detection
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', (e) => {
    useUIStore.getState().setReducedMotion(e.matches);
  });
}