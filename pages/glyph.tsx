import GlyphAccess from '../components/GlyphAccess';
import { permitCheck } from '../utils/permitCheck';

// Replace validateGlyphAccess() or resolveTier() calls with permitCheck()
// Example usage:
// const hasAccess = permitCheck(userTier, 'glyph', 'view');

const GlyphPage = () => {
  return (
    <div>
      <GlyphAccess />
      {/* Other glyph page logic */}
    </div>
  );
};

export default GlyphPage;
