// components/Link/DevLink.tsx
"use client";

import { useLinks } from "@/context/LinkContext";

const DevLink = () => {
  const { links, removeLink, updateLinkPlatform, updateLinkUrl } = useLinks();

  return (
    <>
      {(
        links.map((data, i) => (
          <div
            className="rounded-md p-2 bg-lightGrey w-3/4 mx-auto mb-2"
            key={data.id ?? i}
          >
            <div className="flex justify-between p-2">
              <h4 className="text-grey font-semibold">Link {i + 1}</h4>
              <button
                type="button"
                onClick={() => removeLink(data.id)}
                className="text-grey hover:text-red-500 transition"
              >
                Remove
              </button>
            </div>

            <form className="p-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor={`platform-${i}`} className="block text-sm p-2 text-grey">
                Platform
                <select
                  id={`platform-${i}`}
                  className="input-style custom-select-arrow"
                  value={data.platform}
                  onChange={(e) => updateLinkPlatform(data.id, e.target.value)}
                >
                  <option value="Github">Github</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Hashnode">Hashnode</option>
                  <option value="Website">Website</option>
                </select>
              </label>

              <label htmlFor={`url-${i}`} className="block text-sm p-2 text-grey">
                Link
                <input
                  type="text"
                  id={`url-${i}`}
                  placeholder="Enter URL"
                  className="input-style"
                  value={data.url}
                  onChange={(e) => updateLinkUrl(data.id, e.target.value)}
                />
              </label>
            </form>
          </div>
        ))
      )}
    </>
  );
};

export default DevLink;
