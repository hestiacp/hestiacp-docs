Developing/Contributing to Hestia Documentation
================================================

###############
Checklist
###############

Python 2 (not recommended because of EOL)
-----------------------------------------
Install the following pip modules:

- sphinx
- sphinx-tabs
- sphinx_rtd_theme
- sphinxcontrib.youtube

Python 3
---------
Install the following pip modules:

- sphinx
- sphinx-tabs
- sphinx_rtd_theme
- sphinxcontrib.yt

.. attention::
  For Python 3 rename the following:
  
  - conf.py => conf2.py
  - conf3.py => conf.py



#############
Building
#############

.. tabs:: 

    .. code-tab:: bash Compile

        make html
        
    .. code-tab:: bash Alternative (Python 2)

        python -m sphinx -b html . _build/html
        
    .. code-tab:: bash  Alternative (Python 3)

        python3 -m sphinx -b html . _build/html
