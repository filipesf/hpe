/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';

const profileStyles = css`
  position: relative;
`;

const profileButtonStyles = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-xl);
  height: var(--space-xl);
  border-radius: 100%;
  font-size: var(--font-size-xs);
  font-weight: bold;
  text-align: center;
  line-height: 1;
  background-color: var(--color-gray-200);
  color: var(--color-gray-50);

  &:hover {
    background-color: var(--color-gray-100);
    cursor: pointer;
  }

  &:focus {
    outline: var(--focus-ring);
  }
`;

const profileDetailsStyles = css`
  position: absolute;
  top: var(--space-xl);
  right: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  min-width: 240px;
  padding: var(--space-l);
  border-radius: var(--border-radius-l);
  box-shadow: var(--card-shadow);
  background-color: var(--color-white);
`;

const profileInfoStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs);
`;

const profileNameStyles = css`
  font-size: var(--font-size-s);
  font-weight: 600;
  color: var(--color-gray-200);
`;

const profileEmailStyles = css`
  font-size: var(--font-size-xs);
  font-weight: 400;
  color: var(--color-gray-100);
`;

const profileActionsStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const profileLinkStyles = css`
  font-size: var(--font-size-s);
  font-weight: 600;
  color: var(--color-gray-200);

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: var(--focus-ring);
  }
`;

const profileSignOutStyles = css`
  all: unset;
  padding: var(--space-xs) var(--space-s);
  font-size: var(--font-size-s);
  font-weight: 700;
  border-radius: var(--space-xl);
  background-color: var(--color-blue-200);
  color: var(--color-white);

  &:hover, &:focus {
    background-color: var(--color-blue-300);
    cursor: pointer;
  }

  &:focus {
    outline: var(--focus-ring);
  }
`;

interface ProfileProps {
  name: string;
  email: string;
}

export function Profile({ name, email }: ProfileProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div css={profileStyles}>
      <button css={profileButtonStyles} onClick={toggleIsOpen}>
        {getInitials(name)}
      </button>

      {isOpen && (
        <div css={profileDetailsStyles}>
          <section css={profileInfoStyles}>
            <span css={profileNameStyles}>{name}</span>
            <span css={profileEmailStyles}>{email}</span>
          </section>

          <section css={profileActionsStyles}>
            <a css={profileLinkStyles} href="#Profile">
              View profile
            </a>

            <button
              css={profileSignOutStyles}
              onClick={toggleIsOpen}>
              Sign out
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
